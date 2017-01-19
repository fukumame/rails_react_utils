class NetworkUtil {

  static get(url){
    const promise = $.ajax({
      type: 'GET',
      url: url,
      dataType: 'json',
      xhrFields: {
        withCredentials: true
      }
    });
    return promise;
  }

  static post(url, data){
    const postData = JSON.stringify(data);
    const promise = $.ajax({
      type: 'POST',
      url: url,
      data: postData,
      dataType: 'json',
      xhrFields: {
        withCredentials: true
      }
    });
    return promise;
  }

}