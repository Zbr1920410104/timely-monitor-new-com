import React from 'react';

// import moment from 'moment';

// // 请求
// import proxyFetch from '@/util/request';
// import { GET_PICTURE } from '@/constants/api-constants';

import { Carousel } from 'antd';
import '../../../style/home/monitor/home-monitor.styl';
// const { RangePicker } = DatePicker;

export default (props) => {
  // const [isOpened, setIsOpened] = useState(true),
  //   [needRefresh, setNeedRefresh] = useState(true),
  //   [pictureList, setPictureList] = useState([]),
  //   [loading, setLoading] = useState(false),
  //   [value, setValue] = useState(null);

  // // 将已有的数据回显
  // useEffect(() => {
  //   if (needRefresh) {
  //     (async () => {
  //       setLoading(true);
  //       let timeData = {};
  //       if (value) {
  //         timeData.foreTime = value[0].format('YYYY-MM-DD HH:mm:ss');
  //         timeData.laterTime = value[1].format('YYYY-MM-DD HH:mm:ss');
  //       }
  //       const res = await proxyFetch(
  //         GET_PICTURE,
  //         {
  //           isOpened,
  //           foreTime: timeData?.foreTime,
  //           laterTime: timeData?.laterTime,
  //         },
  //         'GET'
  //       );
  //       if (res) {
  //         console.log(res);
  //         setPictureList(res);
  //       }
  //       setLoading(false);
  //     })();
  //     setNeedRefresh(false);
  //   }
  // }, [needRefresh, isOpened, value]);

  const contentStyle = {
    height: '460px',
    color: '#fff',
    lineHeight: '460px',
    textAlign: 'center',
    background: '#EB2F96',
  };

  // const range = (start, end) => {
  //   const result = [];
  //   for (let i = start; i < end; i++) {
  //     result.push(i);
  //   }
  //   return result;
  // };

  // const disabledDate = (current) => {
  //   // 无法选择之后的日期
  //   return current && current > moment().endOf('day');
  // };

  // const changeTime = (time) => {
  //   setValue(time);
  // };

  return (
    <div className='home-monitor-box'>
      {/* <p className='title-box'>
        <span>图片监控</span>
      </p>
      <div className='time-switch-box'>
        <div className='switch-text-box'>展示最新10张监控图片 </div>
        <Switch
          defaultChecked
          onChange={(e) => {
            setIsOpened(e);
            setNeedRefresh(true);
          }}
        />
      </div>
      <div className='time-select-box'>
        <div className='select-text-box'>时间选择：</div>
        <RangePicker
          disabledDate={disabledDate}
          // disabledTime={disabledDateTime}
          showTime={{
            hideDisabledOptions: true,
            defaultValue: [moment('00:00', 'HH:mm'), moment('11:59', 'HH:mm')],
          }}
          format='YYYY-MM-DD HH:mm'
          disabled={isOpened}
          value={value}
          onChange={(e) => {
            changeTime(e);
            setNeedRefresh(true);
          }}
        />
      </div> */}
      <Carousel autoplay effect='fade' className='carousel-box'>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};
