import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server';

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: assets } = await supabase.from('assets').select();

  return <pre>{JSON.stringify(assets, null, 2)}</pre>;
}
