import {
  AcademicCapIcon,
  BeakerIcon,
  CalculatorIcon, ChartBarIcon,
  CurrencyDollarIcon, DesktopComputerIcon,
  InformationCircleIcon, LightningBoltIcon,
} from '@heroicons/react/solid';

const gencat = [
  { name: 'Computer Science', href: './out/cs', icon: DesktopComputerIcon },
  { name: 'Economics', href: '/econ', icon: CurrencyDollarIcon },
  { name: 'Electrical Engineering and Systems Science', href: '/eess', icon: LightningBoltIcon },
  { name: 'Mathematics', href: '/math', icon: CalculatorIcon },
  { name: 'Physics', href: '/', icon: AcademicCapIcon },
  { name: 'Quantitative Biology', href: '/', icon: BeakerIcon },
  { name: 'Statistics', href: '/', icon: ChartBarIcon },
  { name: 'About', href: '/', icon: InformationCircleIcon },
];

export default gencat;
