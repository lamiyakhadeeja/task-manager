import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(){
    const supabase = await createClient();
    const { data, error } = await supabase.from('tasks')
    .select(`
        id,
        task_number,
        title,
        status,
        scheduled_date,
        scheduled_time,
        position,
        project:projects ( name, color ),
        assignee:profiles!assignee_id ( initials, full_name )
      `)
      .order('position');
          if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data);
}