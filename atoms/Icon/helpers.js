const ICONS_ASSETS_PATH = '/icons/';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const iconList = {
	'right-arrow': () => { return <HiOutlineArrowNarrowRight /> },
};

const iconSize = {};

// export const mapIcon = (type) => `${ICONS_ASSETS_PATH}/${iconList[type]}.svg`;
export const mapIcon = iconList[type]();
export const mapSize = (size) => null;
