import SalaryCalculator from '../SalaryCalculator/SalaryCalculator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const FamilyMemberTabs = ({ members, setMembers }) => {
  return (
    <div>
      <Tabs defaultValue={0}>
        <TabsList className='m-2 bg-cardBg'>
          {members.map((member, index) => (
            <TabsTrigger
              value={index}
              key={index}
              className='text-secondary border-2 border-primary mx-1 bg-primary'
            >
              {member.name}
            </TabsTrigger>
          ))}
          <Button
            size='icon'
            onClick={() =>
              setMembers([
                ...members,
                {
                  name: 'Családtag',
                  salary: '',
                  young: false,
                  married: false,
                  marriedBenefit: false,
                  marriedDate: new Date(),
                  personnel: false,
                  family: false,
                  dependent: 1,
                  dependent2: 0,
                  net: 0,
                },
              ])
            }
            className='ml-5'
          >
            <Plus />
          </Button>
        </TabsList>
        {members.map((member, index) => (
          <TabsContent value={index} key={index}>
            <SalaryCalculator
              member={member}
              members={members}
              setMembers={setMembers}
              key={index}
              index={index}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default FamilyMemberTabs;
