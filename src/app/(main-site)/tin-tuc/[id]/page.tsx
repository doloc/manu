'use client'

import { fetchPostDetail } from "@/app/lib/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { decodeHTMLEntities } from "@/utils/helpers";

const NewsDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchPostDetail(id as string).then((data) => {
      setData(data.data);
    });
  }, [id]);

  return (
    <div className="relative w-full px-[4%] md:px-[10%] py-[8%] flex flex-col items-center text-[#492EAB]">
      {data && <h1 className="text-base md:text-[1.5vw] font-semibold text-center">{data.title}</h1>}
      <img src="/images/tin-tuc/custom-line.png" alt="" className="mt-[3%] md:mt-[1%] w-[95%] md:w-[80%] object-contain" />

      {data && <div className="mt-[2%] w-full max-h-[60vh] md:max-h-[125vh] overflow-x-hidden overflow-y-scroll hide-scroll">
        <div dangerouslySetInnerHTML={{ __html: decodeHTMLEntities(data?.content) || ''}}></div>
      </div>}
    </div>
  );
};

export default NewsDetail;