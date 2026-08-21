<?php
/**
 * Patches WebsiteNews.php controller to support:
 * - month_header, side_label, year from POST in addNewToDb()
 * - month_header, side_label, year from POST in updateNews()
 * - updateNews($row_id) from URL segment
 */

$file = 'D:/xampp/htdocs/ASHIRVAD/ADMIN_PANEL/application/controllers/WebsiteNews.php';
$lines = file($file);
$out   = [];

for ($i = 0; $i < count($lines); $i++) {
    $line = $lines[$i];

    // ── PATCH 1: addNewToDb — replace hardcoded year + add month_header/side_label ──────
    // Line: $newsInfo['year'] = date('Y');
    if (strpos($line, "\$newsInfo['year'] = date('Y');") !== false) {
        $indent = str_repeat(' ', strlen($line) - strlen(ltrim($line)));
        // Replace just this one line with year from POST + new fields
        $out[] = $indent . "\$yearVal = \$this->input->post('year') ?: date('Y', strtotime(\$date));\n";
        $out[] = $indent . "\$newsInfo['year'] = \$yearVal;\n";
        $out[] = $indent . "\$mhVal = \$this->input->post('month_header');\n";
        $out[] = $indent . "\$newsInfo['month_header'] = !empty(\$mhVal) ? strtoupper(\$mhVal) : strtoupper(date('F Y', strtotime(\$date)));\n";
        $out[] = $indent . "\$slVal = \$this->input->post('side_label');\n";
        $out[] = $indent . "\$newsInfo['side_label'] = !empty(\$slVal) ? strtoupper(\$slVal) : strtoupper(substr(\$subject, 0, 20));\n";
        continue; // skip original line
    }

    // ── PATCH 2: updateNews — change signature to accept $row_id param ──────────────────
    // Line: public function updateNews(){
    if (strpos($line, 'public function updateNews(){') !== false) {
        $indent = str_repeat(' ', strlen($line) - strlen(ltrim($line)));
        $out[] = $indent . "public function updateNews(\$row_id = null){\n";
        continue;
    }

    // ── PATCH 3: updateNews — after isAdmin check, get row_id from URI if not in POST ───
    // Line: $row_id = $this->input->post('row_id');
    if (strpos($line, "\$row_id = \$this->input->post('row_id');") !== false) {
        $indent = str_repeat(' ', strlen($line) - strlen(ltrim($line)));
        $out[] = $indent . "if (!\$row_id) { \$row_id = \$this->uri->segment(2); }\n";
        $out[] = $indent . "if (!\$row_id) { redirect('newsListing'); }\n";
        continue; // remove original line
    }

    // ── PATCH 4: updateNews data assignment — add year, month_header, side_label ─────────
    // After: $newsInfo['description'] = $description; (the second occurrence, inside updateNews)
    // We'll detect by the combo of surrounding lines — insert after location line before updated_by
    // Line: $newsInfo['location'] = $location; (second occurrence)
    static $locationCount = 0;
    if (strpos($line, "\$newsInfo['location'] = \$location;") !== false) {
        $locationCount++;
        $out[] = $line;
        if ($locationCount === 2) {
            // This is the updateNews location assignment — add new fields after it
            $indent = str_repeat(' ', strlen($line) - strlen(ltrim($line)));
            $out[] = $indent . "\$updYear = \$this->input->post('year') ?: date('Y', strtotime(\$date));\n";
            $out[] = $indent . "\$newsInfo['year'] = \$updYear;\n";
            $out[] = $indent . "\$updMh = \$this->input->post('month_header');\n";
            $out[] = $indent . "\$newsInfo['month_header'] = !empty(\$updMh) ? strtoupper(\$updMh) : strtoupper(date('F Y', strtotime(\$date)));\n";
            $out[] = $indent . "\$updSl = \$this->input->post('side_label');\n";
            $out[] = $indent . "\$newsInfo['side_label'] = !empty(\$updSl) ? strtoupper(\$updSl) : strtoupper(substr(\$subject, 0, 20));\n";
        }
        continue;
    }

    $out[] = $line;
}

file_put_contents($file, implode('', $out));
echo "Patched successfully!" . PHP_EOL;

// Verify
$result = file_get_contents($file);
echo (strpos($result, 'month_header') !== false ? "OK: month_header found" : "WARN: month_header not found") . PHP_EOL;
echo (strpos($result, 'side_label') !== false ? "OK: side_label found" : "WARN: side_label not found") . PHP_EOL;
echo (strpos($result, 'updateNews($row_id = null)') !== false ? "OK: updateNews signature patched" : "WARN: updateNews signature NOT patched") . PHP_EOL;
