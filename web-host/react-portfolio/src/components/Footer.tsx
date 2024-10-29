import personalInfo from '../data/personalInfo';

export default function Footer() {
  return (
	<footer className="bg-black text-white py-6 px-6 md:px-12 lg:px-24 text-center border-t border-gray-800">
        	<p>&copy; 2024 {personalInfo.name}. All rights reserved.</p>
        </footer>
	);
}
