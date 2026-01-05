import { createClient } from '@supabase/supabase.js';

const supabaseUrl = 'https://ximisbmpcyvjxdutrpjb.supabase.co';
const supabaseKey = 'sb_publishable_5A-pOeeAQgMfRBwN35AfKw_QLxg6j4I';
export const supabase = createClient(supabaseUrl, supabaseKey);

