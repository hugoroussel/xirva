import {
  AcademicCapIcon,
  BeakerIcon,
  CalculatorIcon, ChartBarIcon,
  CurrencyDollarIcon, DesktopComputerIcon,
  InformationCircleIcon, LightningBoltIcon,
} from '@heroicons/react/solid';

const gencat = [
  { name: 'Computer Science', href: './out/cs', icon: DesktopComputerIcon },
  { name: 'Economics', href: './out/econ', icon: CurrencyDollarIcon },
  { name: 'Electrical Engineering and Systems Science', href: './out/eess', icon: LightningBoltIcon },
  { name: 'Mathematics', href: './out/math', icon: CalculatorIcon },
  { name: 'Physics', href: '/', icon: AcademicCapIcon },
  { name: 'Quantitative Biology', href: '/', icon: BeakerIcon },
  { name: 'Statistics', href: '/', icon: ChartBarIcon },
  { name: 'About', href: '/', icon: InformationCircleIcon },
];

export default gencat;
