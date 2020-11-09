import React from 'react';

import { Image } from 'antd';
import '../../../style/home/monitor/monitor-list.styl';

const urlList = [
  {
    id: 1,
    time: '2020-11-05 13:39:00',
    url: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604910238653&di=d94cdb18b95c143e3f3259f51a35ace6&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1308%2F29%2Fc0%2F25038622_1377746019192.jpg`,
  },
  {
    id: 2,
    time: '2020-11-05 13:39:00',
    url: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604910238653&di=d94cdb18b95c143e3f3259f51a35ace6&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1308%2F29%2Fc0%2F25038622_1377746019192.jpg`,
  },
  {
    id: 3,
    time: '2020-11-05 13:39:00',
    url: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604910238653&di=d94cdb18b95c143e3f3259f51a35ace6&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1308%2F29%2Fc0%2F25038622_1377746019192.jpg`,
  },
  {
    id: 4,
    time: '2020-11-05 13:39:00',
    url: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604910238653&di=d94cdb18b95c143e3f3259f51a35ace6&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1308%2F29%2Fc0%2F25038622_1377746019192.jpg`,
  },
  {
    id: 5,
    time: '2020-11-05 13:39:00',
    url: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604910238653&di=d94cdb18b95c143e3f3259f51a35ace6&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1308%2F29%2Fc0%2F25038622_1377746019192.jpg`,
  },
  {
    id: 6,
    time: '2020-11-05 13:39:00',
    url: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604910238653&di=d94cdb18b95c143e3f3259f51a35ace6&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1308%2F29%2Fc0%2F25038622_1377746019192.jpg`,
  },
  {
    id: 7,
    time: '2020-11-05 13:39:00',
    url: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604910238653&di=d94cdb18b95c143e3f3259f51a35ace6&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1308%2F29%2Fc0%2F25038622_1377746019192.jpg`,
  },
  {
    id: 8,
    time: '2020-11-05 13:39:00',
    url: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604910238653&di=d94cdb18b95c143e3f3259f51a35ace6&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1308%2F29%2Fc0%2F25038622_1377746019192.jpg`,
  },
  {
    id: 9,
    time: '2020-11-05 13:39:00',
    url: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604910238653&di=d94cdb18b95c143e3f3259f51a35ace6&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1308%2F29%2Fc0%2F25038622_1377746019192.jpg`,
  },
];

export default (props) => {
  return (
    <div className='home-monitor-list-box'>
      {urlList
        ? urlList.map((item) => {
            return (
              <Image
                id={item.id}
                src={item.url}
                alt={item.time}
                className='image'
              />
            );
          })
        : null}
    </div>
  );
};
