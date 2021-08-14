import {
  AcademicCapIcon,
  BeakerIcon,
  CalculatorIcon, ChartBarIcon,
  CurrencyDollarIcon, DesktopComputerIcon,
  InformationCircleIcon, LightningBoltIcon,
} from '@heroicons/react/solid';

const gencat = [
  { name: 'Computer Science', href: '/cs', icon: DesktopComputerIcon },
  { name: 'Economics', href: '/econ', icon: CurrencyDollarIcon },
  { name: 'Electrical Engineering and Systems Science', href: '/eess', icon: LightningBoltIcon },
  { name: 'Mathematics', href: '/math', icon: CalculatorIcon },
  { name: 'Physics', href: '/physics', icon: AcademicCapIcon },
  { name: 'Quantitative Biology', href: '/bio', icon: BeakerIcon },
  { name: 'Statistics', href: '/stat', icon: ChartBarIcon },
  { name: 'About', href: '/about', icon: InformationCircleIcon },
];

export default gencat;
