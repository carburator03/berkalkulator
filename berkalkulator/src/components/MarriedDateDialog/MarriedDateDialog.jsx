import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { DatePicker } from './DatePicker';
import { useState, useEffect } from 'react';

export function MarriedDateDialog({ marriedBenefit, setMarriedBenefit }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const today = new Date();
    const nextMonth = new Date(date);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    const diff = Math.floor((today - nextMonth) / (1000 * 60 * 60 * 24));
    if (diff > 0 && diff <= 730) setMarriedBenefit(true);
    else setMarriedBenefit(false);
  }, [date]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Badge className='cursor-pointer'>Dátum</Badge>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Házasságkötés dátuma</DialogTitle>
          <DialogDescription>
            A kedvezmény először a házasságkötést követő hónapra vehető igénybe és a házassági
            életközösség alatt legfeljebb 24 hónapon keresztül jár.
          </DialogDescription>
        </DialogHeader>
        <div className=''>
          {' '}
          <DatePicker date={date} setDate={setDate} />
        </div>
        <DialogFooter className='sm:justify-start'>
          <DialogClose asChild>
            <Button type='button' variant='secondary'>
              Bezárás
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
