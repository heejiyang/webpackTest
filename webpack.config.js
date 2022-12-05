const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode : 'development',

  // 엔트리 : 모듈의 시작점
  entry : {
    main : path.resolve('./src/app.js')
  },

  // 출력 : 모든 모듈을 하나로 합쳐서 저장하는 경로를 설정합니다.
  output : {
    // entry의 main의 key값이 name에 자동으로 들어온다.
    filename : '[name].js',
    path : path.resolve('./dist')
  },

  module : {
    // rules에서 로더를 추가할 수 있습니다.
    rules : [
      {
        // 로더가 처리해야할 파일의 패턴(정규표현식)입니다.
        // 여기서 \는 .을 정규표현식 문법이 아닌 특수문자로, .js$ 는 .js 로 끝나는 모든 파일을 의미합니다.
        // 원래 정규표현식에서 .의 의미는 모든 문자나 숫자를 의미합니다.
        test: /\.js$/,

        // 위와 일치하는 패턴의 파일이 전달될 로더를 설정합니다.
        use: [
          path.resolve('./myLoader.js')
        ]
    },
    {
      test: /\.css$/,
      use: [
        // 로더는 아래부터 순서대로 처리됩니다.
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      type: 'asset/inline',
      parser: {
        dataUrlCondition: {
        maxSize: 20 * 1024 // 1kb가 1024byte 이기 때문에 20kb를 원한다면 1024에 20을 곱합니다.
        }
      },
    },
  ]
  },
  plugins : [
    new webpack.BannerPlugin({
      banner : '배너입니다!!!'
    }),
  ]
}