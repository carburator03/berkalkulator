import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const HouseholdSummary = ({ members }) => {
  return (
    <div className='max-w-full border-4 flex-1 rounded-2xl bg-cardBg'>
      <h1 className='text-center text-lg my-2 font-bold'>Háztartás összesített jövedelme</h1>
      <Table className='border-2 w-5/6 mx-auto'>
        <TableHeader>
          <TableRow className='[&>*]:text-primary uppercase [&>*]:font-bold'>
            <TableHead>Családtag</TableHead>
            <TableHead>Nettó bér</TableHead>
            <TableHead className='text-right'>Kedvezmények</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member, index) => {
            let classToApply = '';
            index % 2 === 0 ? (classToApply = 'bg-[#99bec9]') : (classToApply = 'bg-[#78959e]');
            return (
              <TableRow key={index} className={classToApply}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.net} Ft</TableCell>
                <TableCell className={'flex justify-end gap-1'}>
                  {member.young ? (
                    <Badge variant='secondary' className='border-2 border-primary'>
                      SZJA
                    </Badge>
                  ) : (
                    ''
                  )}
                  {member.married ? (
                    <Badge variant='secondary' className='border-2 border-primary'>
                      Házasok
                    </Badge>
                  ) : (
                    ''
                  )}
                  {member.personnel ? (
                    <Badge variant='secondary' className='border-2 border-primary'>
                      Személyi
                    </Badge>
                  ) : (
                    ''
                  )}
                  {member.family ? (
                    <Badge variant='secondary' className='border-2 border-primary'>
                      Családi
                    </Badge>
                  ) : (
                    ''
                  )}
                </TableCell>
              </TableRow>
            );
          })}
          <TableRow className='font-bold'>
            <TableCell>Összesen</TableCell>
            <TableCell>{members.reduce((acc, member) => acc + member.net, 0)} Ft</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default HouseholdSummary;
