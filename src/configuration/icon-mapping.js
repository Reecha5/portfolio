import { ReactComponent as AboutMe } from '../assests/aboutMe.svg';
import { ReactComponent as Contact } from '../assests/contact.svg';
import { ReactComponent as Document } from '../assests/document.svg';
import { ReactComponent as ForwardArrow } from '../assests/forwardArrow.svg';
import { ReactComponent as Github } from '../assests/github.svg';
import { ReactComponent as HireMe } from '../assests/hireMe.svg';
import { ReactComponent as LinkedIn } from '../assests/linkedIn.svg';
import { ReactComponent as Location } from '../assests/location.svg';
import { ReactComponent as Message } from '../assests/message.svg';
import { ReactComponent as NavbarIcon } from '../assests/navbar-icon.svg';
import { ReactComponent as Pdf } from '../assests/pdf.svg';
import { ReactComponent as Phone } from '../assests/phone.svg';
import { ReactComponent as Portfolio } from '../assests/portfolio.svg';
import { ReactComponent as Resume } from '../assests/resume.svg';
import { ReactComponent as Website } from '../assests/website.svg';
import { ReactComponent as View } from '../assests/view.svg';
import { ReactComponent as Cote } from '../assests/cots.svg';
import { ReactComponent as Twitter } from '../assests/twitter.svg';
import { ReactComponent as Instagram } from '../assests/instagram.svg';
import { ReactComponent as StackOverflow } from '../assests/stackoverflow.svg';
import { ReactComponent as Facebook } from '../assests/facebook.svg';
import { ReactComponent as GoogleMail } from '../assests/googleMail.svg';
import { ReactComponent as Cross } from '../assests/cross.svg';

import { ReactComponent as Css3 } from '../assests/languageLogo/css-3-svgrepo-com.svg';
import { ReactComponent as Git } from '../assests/languageLogo/git-svgrepo-com.svg';
import { ReactComponent as Html5 } from '../assests/languageLogo/html-5-svgrepo-com.svg';
import { ReactComponent as Java } from '../assests/languageLogo/java-svgrepo-com.svg';
import { ReactComponent as Javascript } from '../assests/languageLogo/javascript-svgrepo-com.svg';
import { ReactComponent as Kibana } from '../assests/languageLogo/kibana-svgrepo-com.svg';
import { ReactComponent as Reactjs } from '../assests/languageLogo/reactjs-svgrepo-com.svg';
import { ReactComponent as SpringioAr21 } from '../assests/languageLogo/springio-ar21.svg';
import { ReactComponent as SpringioIcon } from '../assests/languageLogo/springio-icon.svg';
import { ReactComponent as Sql } from '../assests/languageLogo/sql-svgrepo-com.svg';

import {ReactComponent as Recruitment } from '../assests/extraIcon/recruitment.svg';
import {ReactComponent as Onboard} from '../assests/extraIcon/onboard.svg';
import {ReactComponent as Client_vendor } from '../assests/extraIcon/client_vendor.svg';
import {ReactComponent as Candidate_management } from '../assests/extraIcon/candidate_management.svg';
import {ReactComponent as Salary} from '../assests/extraIcon/salary.svg';
import {ReactComponent as Technology} from '../assests/extraIcon/technology.svg';

import {ReactComponent as Excel} from '../assests/toolsIcon/excel.svg';
import {ReactComponent as MsWord} from '../assests/toolsIcon/ms_word.svg';
import {ReactComponent as PowerBi} from '../assests/toolsIcon/power_bi.svg';


const iconMapping = {
  'aboutMe-icon': AboutMe,
  'contact-icon': Contact,
  'document-icon': Document,
  'forwardArrow-icon': ForwardArrow,
  'github-icon': Github,
  'hireMe-icon': HireMe,
  'linkedIn-icon': LinkedIn,
  'location-icon': Location,
  'message-icon': Message,
  'navbarIcon-icon': NavbarIcon,
  'pdf-icon': Pdf,
  'phone-icon': Phone,
  'portfolio-icon': Portfolio,
  'resume-icon': Resume,
  'website-icon': Website,
  'view-icon': View,
  'cote-icon': Cote,
  'twitter-icon': Twitter,
  'instagram-icon': Instagram,
  'stackOverflow-icon': StackOverflow,
  'facebook-icon': Facebook,
  'googleMail-icon': GoogleMail,
  'cross-icon': Cross,

  'language-css3-icon': Css3,
  'language-git-icon': Git,
  'language-html5-icon': Html5,
  'language-java-icon': Java,
  'language-javascript-icon': Javascript,
  'language-kibana-icon': Kibana,
  'language-reactjs-icon': Reactjs,
  'language-springioAr21-icon': SpringioAr21,
  'language-springioIcon-icon': SpringioIcon,
  'language-sql-icon': Sql,

  'extra-icon-recruitment': Recruitment,
  'extra-icon-onboard': Onboard,
  'extra-icon-vendor': Client_vendor,
  'extra-icon-candidate_management': Candidate_management,
  'extra-icon-salary': Salary,
  'extra-icon-technology': Technology,

  'tool-icon-excel': Excel,
  'tool-icon-ms_word': MsWord,
  'tool-icon-power_bi': PowerBi,

};

const IconComponent = (props) => {
  const Icon = iconMapping[props?.icon];
  if (!Icon) {
    return null;
  }
  // removing undefined or empty or null string
  const filteredProps = Object.fromEntries(
    Object.entries(props).filter(([key, value]) => value !== null && value !== undefined && value !== '')
  );
  return <Icon {...filteredProps} />;
};

export default IconComponent;