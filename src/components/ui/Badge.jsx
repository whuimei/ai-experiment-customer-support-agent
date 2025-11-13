import { STATUS_COLORS } from '../../constants/demoData';

const Badge = ({ status }) => {
  const colors = STATUS_COLORS[status] || {
    bg: 'bg-gray-100',
    text: 'text-gray-800',
    border: 'border-gray-300'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${colors.bg} ${colors.text} ${colors.border}`}>
      {status}
    </span>
  );
};

export default Badge;
