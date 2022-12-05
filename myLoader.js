module.exports = function myLoader(item){
  console.log('hello loader!');

  // item : loader함수를 통해 처리할 파일. 문자열로 처리할 수 있다.
  // 로더가 읽을 파일이 item으로 전달됩니다. item은 리소스 파일의 콘텐츠를 담고 있는 문자열입니다.
  // 반환하는 리소스를 replace 문법을 통해 가공합니다.
  return item.replace('console.log(', 'alert(');
}