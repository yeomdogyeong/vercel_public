import Image from "next/image";

export default function Fourth() {
  return (
    <div className="ml-5 my-10">
      <div className="flex flex-col mb-3">
        <span className="text-gray-600 text-2xl ">17~19도 사이의</span>
        <span className="text-gray-600 text-2xl ">필수 옷차림은</span>
        <span className="font-bold text-3xl">바람막이에요!</span>
      </div>
      <div className="flex flex-col mb-3">
        <span className="text-gray-400 text-sm">외출하기 좋은 날씨에요</span>
        <span className="text-gray-400 text-sm">
          얇고 가벼운 봄 옷차림을 하세요!
        </span>
      </div>
      <div className="mb-20 flex flex-col gap-1">
        <div className="flex gap-1">
          <div className="rounded-full border border-solid border-blue-500 px-2 text-blue-500">
            후드티
          </div>
          <div className="rounded-full border border-solid border-blue-500 px-2 text-blue-500">
            바람막이
          </div>
        </div>
        <div className="flex">
          <div className="rounded-full border border-solid border-blue-500 px-2 text-blue-500">
            슬랙스
          </div>
        </div>
      </div>

      <div className="w-[200px] h-[200px]">
        <Image src="/assets/바람막이.png" alt="옷" width={200} height={200} />
      </div>
    </div>
  );
}
