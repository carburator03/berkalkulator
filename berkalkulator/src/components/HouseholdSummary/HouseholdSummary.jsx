import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const HouseholdSummary = ({ members }) => {
  return (
    <div className='max-w-full border-4 flex-1'>
      <h1 className='text-center'>Háztartás összesített jövedelme</h1>
      <Table className='border-2'>
        <TableHeader>
          <TableRow>
            <TableHead>Családtag</TableHead>
            <TableHead>Nettó bér</TableHead>
            <TableHead className='text-right'>Kedvezmények</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member, index) => {
            let classToApply = '';
            if (index % 2 === 0) classToApply = 'bg-gray-100';
            return (
              <TableRow key={index}>
                <TableCell className={classToApply}>{member.name}</TableCell>
                <TableCell className={classToApply}>{member.net}</TableCell>
                <TableCell className={classToApply + ' flex justify-end'}>
                  {member.young ? <Badge variant='secondary'>SZJA</Badge> : ''}
                  {member.married ? <Badge variant='secondary'>Házasok</Badge> : ''}
                  {member.personnel ? <Badge variant='secondary'>Személyi</Badge> : ''}
                  {member.family ? <Badge variant='secondary'>Családi</Badge> : ''}
                </TableCell>
              </TableRow>
            );
          })}
          <TableRow>
            <TableCell>Összesen</TableCell>
            <TableCell>{members.reduce((acc, member) => acc + member.net, 0)}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default HouseholdSummary;
