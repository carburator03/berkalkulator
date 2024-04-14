import SalaryCalculator from '../SalaryCalculator/SalaryCalculator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const FamilyMemberTabs = ({ members, setMembers }) => {
  return (
    <div>
      <Tabs defaultValue={0} className=''>
        <TabsList>
          {members.map((member, index) => (
            <TabsTrigger value={index} key={index}>
              {member.name}
            </TabsTrigger>
          ))}
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
