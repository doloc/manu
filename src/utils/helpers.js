const GameUrl = process.env.NEXT_PUBLIC_GAME_URL
const SocialData = {
  ZALO_OA_IOS: process.env.NEXT_PUBLIC_ZALO_OA_IOS,
  ZALO_OA_ANDROID: process.env.NEXT_PUBLIC_ZALO_OA_ANDROID,
}

export const isMobile = () => {
  if (window.innerWidth < 800) return true;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
};
export const isIOS = () => {
  if (/iP(hone|ad|od)/i.test(navigator.userAgent)) return true;
  return false;
};

export const scaleFitDesign = (onlyPc, transformOrigin = "top left") => {
  if (onlyPc && isMobile()) return {};
  const desginWidth = isMobile() ? 800 : 1240;
  const style = {
    transform: `scale(${
      window.innerWidth < desginWidth ? window.innerWidth / desginWidth : 1
    })`,
    width:
      (window.innerWidth < desginWidth ? desginWidth : window.innerWidth) +
      "px",
    transformOrigin,
  };
  return style;
};

export function toSlug(str = "") {
  let slug = str.trim().toLowerCase();
  //Đổi ký tự có dấu thành không dấu
  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a");
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e");
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, "i");
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o");
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u");
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y");
  slug = slug.replace(/đ/gi, "d");
  slug = slug.replace(/ /gi, "-");
  return slug;
}

export const transform = (value) => ({
  transform: value,
  webkitTransform: value,
  msTransform: value,
  mozTransform: value,
  oTransform: value,
});

export const openGame = () => {
  const url = `${GameUrl}${
    window.location.search ||
    `?utm_source=Website&utm_medium=Website-trangchu&utm_campaign=choingay`
  }`;
  window.open(url);
};

export const openOA = () => {
  window.open(isIOS() ? SocialData.ZALO_OA_IOS : SocialData.ZALO_OA_ANDROID);
};
export function pointNumber(number) {
  const dot =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ".";
  const value = Math.floor(Math.abs(number));
  return (
    (number < 0 ? "-" : "") +
    String(value).replace(/\B(?=(\d{3})+(?!\d))/g, dot)
  );
}

function fillZero(num) {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
}

export function formatTime(value) {
  if (typeof value !== "number") return value;
  const ts = new Date(value);
  const y = ts.getFullYear();
  const m = fillZero(ts.getMonth() + 1);
  const d = fillZero(ts.getDate());
  const h = fillZero(ts.getHours());
  const mi = fillZero(ts.getMinutes());
  const time = `${d}-${m}-${y} ${h}:${mi}`;
  return time;
}

export function decodeHTMLEntities(text) {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
}

export const capitalizeFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const formatCurrency = (value) => {
  return new Intl.NumberFormat("vi-VN").format(value);
}


export const checkTimeEvent = () => {
  const now = new Date();
  const d = fillZero(now.getDate());
  return !(d > 26 && d <= 30);
}