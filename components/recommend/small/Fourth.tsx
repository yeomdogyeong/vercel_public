export default function Fourth() {
    return (
      <div className="flex w-full justify-around items-center">
        <div>
          <svg
            className="w-40 h-40"
            width="216"
            height="216"
            viewBox="0 0 216 216"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect
              width="216"
              height="216"
              rx="10"
              fill="url(#pattern0_452_3702)"
            />
            <defs>
              <pattern
                id="pattern0_452_3702"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_452_3702" transform="scale(0.0015625)" />
              </pattern>
              <image id="image0_452_3702" width="640" height="640" />
            </defs>
          </svg>
        </div>
        <div className="flex flex-col px-2">
          <span className="font-bold text-2xl">17~19°C</span>
          <span className="font-semibold">가벼운 봄 옷차림을</span>
          <span className="font-semibold mb-3">하세요!</span>
          <div className="flex gap-1">
            <div className="border-2 border-blue-500 border-solid rounded-full text-blue-500 px-2">
              후드티
            </div>
            <div className="border-2 border-blue-500 border-solid rounded-full text-blue-500 px-2">
              바람막이
            </div>
          </div>
          <div className="flex mt-1">
            <div className="border-2 border-blue-500 border-solid rounded-full text-blue-500 px-2">
              슬랙스
            </div>
          </div>
        </div>
      </div>
    );
  }
  