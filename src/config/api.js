/**
 * Centralized API & Assets Configuration
 * Loads from Vite environment variables (.env) with safe fallbacks.
 */

export const API_BASE = 
  import.meta.env.VITE_API_BASE_URL || 
  'http://localhost/ASHIRVAD/ADMIN_PANEL/index.php/api/news';

export const ADMIN_ASSETS_URL = 
  import.meta.env.VITE_ADMIN_ASSETS_URL || 
  'http://localhost/ASHIRVAD/ADMIN_PANEL/assets/';
