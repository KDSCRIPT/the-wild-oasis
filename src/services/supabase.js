import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://kfylzmyjrkelphnxxvxe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmeWx6bXlqcmtlbHBobnh4dnhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyNjMzNTMsImV4cCI6MjA1MjgzOTM1M30.FpUcSvWAPjtuxmFErz-bY0ReXRr4yDqMMqjHo1TYFQ4";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
