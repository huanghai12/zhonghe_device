import icons from '../../public/png/icon.png';
import Image from 'next/image';

function Par_title ({width,height}: any)  {
  const height1 = height - 2;//右侧三个斜线高度终点
  const height2 = height/2 - 3;//右侧横线高度
  const height3 = 10;
  const width1 = width - 2;//右侧亮横线的终点位置
  const width2 = width1 - 8;//右侧亮横线的起点位置
  const width3 = 9;

  return (
    
     <svg 
          xmlns="http://www.w3.org/2000/svg"
          width={width1 + "px"} height={height + "px"}>
          <defs>
          <linearGradient id="PSgrad_0" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="rgb(18,74,113)" stopOpacity="1" />
          <stop offset="99%" stopColor="rgb(27,101,152)" stopOpacity="0.01" />
          <stop offset="100%" stopColor="rgb(27,101,152)" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="PSgrad_1" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="rgb(0,0,0)" stopOpacity="1" />
          <stop offset="100%" stopColor="rgb(255,255,255)" stopOpacity="1" />
          </linearGradient>

          </defs>
          <path fillRule="evenodd"  fill="rgb(231, 255, 253)"
          d={"M"
          + width3 + 
          ".212,0 "+ 0 + ".696,0 "+ 0 + ".696,3 L"
          +width3+
          ".212,2 L"
          + width3 + 
          ".212,1 Z"}/>
          <path fillRule="evenodd"  opacity="0.6" fill="rgb(120, 240, 253)"
          d={"M188.684,"
          +height3+
          ".965 L181.336,2.867 L189.733,2.867 L197.081,"
          +height3+
          ".965 L188.684,"
          +height3+
          ".965 ZM175.038,"
          +height3+
          ".965 L167.691,2.867 L176.088,2.867 L183.435,"
          +height3+
          ".965 L175.038,"
          +height3+
          ".965 ZM161.393,"
          +height3+
          ".965 L154.045,2.867 L162.442,2.867 L169.790,"
          +height3+
          ".965 L161.393,"
          +height3+
          ".965 Z"}/>
          <path fillRule="evenodd"  opacity="0.239" fill="url(#PSgrad_0)"
          d={"M2.549,45.902 C2.549,29.349 1.614,0.996 1.614,0.996 L143.422,0.996 L158.016,15.053 "
          + width1 + 
          ".104,"
          +height3+
          ".053 "
            + width1 + 
            ".104,"
            +height1+
            ".869 C800.104,"
            +height1+
            ".869 66.382,57.129 2.082,57.129 "}/>
          <path fillRule="evenodd"  stroke="rgb(71, 201, 222)" strokeWidth="1px" strokeLinecap="round" strokeLinejoin="round" opacity="0.902" fill="none"
          d={"M1.146,"
          +height1+
          ".193 "
          + width1 + 
          ".091,"
          +height1+
          ".193 "
          + width1 + 
          ".091,"
          +height2+
          ".642 L159.295,"
          +height2+
          ".642 L145.072,0.996 L1.614,0.996 C1.614,0.996 1.614,4.652 1.614,9.263 C1.614,17.138 1.614,46.510 1.614,46.510 L1.146,"
          +height1+
          ".193 Z"}/>
          <path fillRule="evenodd"  fill="rgb(231, 255, 253)"
          d={"M"
          + width1 + 
          ".212,14.657 "
          + width2 + 
          ".696,14.657 "
          + width2 + 
          ".696,"
          +height2+
          ".528 L"
          +width1+
          ".212,"
          +height2+
          ".528 L"
          + width1 + 
          ".212,14.657 Z"}/>
     </svg>
  );
}

export default function Par_box({width,height,name,children}:any) {
  return <>
    <div className='title_icon' >
        <div>
          <Image style={{width: '20px', height: '20px'}} src={icons} alt=""></Image>
          <span>{name}</span>
        </div>
        <Par_title width={width} height={height}></Par_title>
    </div>
    <div style={{width: width - 3,marginLeft: '1px'}} className='par_body'>{children}</div>

  </>
}
