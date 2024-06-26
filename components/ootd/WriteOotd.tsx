"use client";
import { ChangeEvent, HtmlHTMLAttributes, useState } from "react";
export default function WriteOotd() {
  const [review, setReview] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
    console.log(review);
  };
  return (
    <section className="w-full flex flex-col items-center relative">
      <h1 className="absolute left-12 mb-4 font-semibold">
        OOTD 후기를 작성해주세요
      </h1>
      <textarea
        value={review}
        onChange={handleChange}
        placeholder="글 작성하기"
        className="mt-12 font-thin border-2 rounded-2xl p-4 w-5/6 h-[160px] bg-gray-200 "
      />
    </section>
  );
}
