'use client';

import Select from 'react-select'
import useColleges from '@/app/hooks/useColleges';


export type CollegeSelectValue = {
  name: string,
  state: string
}

interface CollegeSelectProps {
  value?: CollegeSelectValue;
  onChange: (value: CollegeSelectValue) => void;
}

const CollegeSelect: React.FC<CollegeSelectProps> = ({
  value,
  onChange
}) => {
  const { getAll } = useColleges();

  return ( 
    <div>
      <Select
        placeholder="Any University"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CollegeSelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="
          flex flex-row items-center gap-3">
            <div>{option.flag}</div>
            <div>
              {option.label},
              <span className="text-neutral-500 ml-1">
                {option.region}
              </span>
            </div>
          </div>
        )}
        classNames={{
          control: () => 'p-3 border-2',
          input: () => 'text-lg',
          option: () => 'text-lg'
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: 'black',
            primary25: '#ffe4e6'
          }
        })}
      />
    </div>
   );
}
 
export default CollegeSelect;