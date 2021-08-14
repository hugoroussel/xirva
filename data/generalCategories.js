import {
  AcademicCapIcon,
  BeakerIcon,
  CalculatorIcon, ChartBarIcon,
  CurrencyDollarIcon, DesktopComputerIcon,
  LightningBoltIcon,
  CashIcon,
} from '@heroicons/react/solid';

const gencat = [
  { name: 'Computer Science', href: '/cs', icon: DesktopComputerIcon },
  { name: 'Economics', href: '/econ', icon: CurrencyDollarIcon },
  { name: 'Electrical Engineering and Systems Science', href: '/eess', icon: LightningBoltIcon },
  { name: 'Mathematics', href: '/math', icon: CalculatorIcon },
  { name: 'Physics', href: '/physics', icon: AcademicCapIcon },
  { name: 'Quantitative Biology', href: '/bio', icon: BeakerIcon },
  { name: 'Quantitative Finance', href: '/finance', icon: CashIcon },
  { name: 'Statistics', href: '/stat', icon: ChartBarIcon },
];

export default gencat;
