import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface ExampleCustomInputProps {
  value?: string;
  onClick?: () => void;
}

// ExampleCustomInput 컴포넌트 정의
function ExampleCustomInput({
  value = 'Select date',
  onClick = () => {},
}: ExampleCustomInputProps) {
  return (
    <button
      type='button'
      className='w-204 h-48 text-left mr-8 text-text-default bg-background-secondary px-16 py-15 rounded-xl leading-4 hover:ring-interaction-hover focus:ring-1'
      onClick={onClick}
    >
      {value}
    </button>
  );
}

// 기본값 설정 (이 경우 이미 기본값이 함수 매개변수에서 설정됨)
ExampleCustomInput.defaultProps = {
  value: 'Select date',
  onClick: () => {},
};

function Calendar({ date, setDate }: { date: Date; setDate: any }) {
  return (
    <DatePicker
      selected={date}
      onChange={(nextDate: Date | null) => setDate(nextDate)}
      customInput={<ExampleCustomInput />}
      dateFormat='yyyy년 MM월 dd일'
    />
  );
}

export default Calendar;
