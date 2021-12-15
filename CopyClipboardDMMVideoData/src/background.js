const gasUrl = 
chrome.runtime.onMessage.addListener(
    function (request, sender, callback) {
      console.log(`バックグラウンドで受け取ったもの: ${request.message}`);
 
      const req = new XMLHttpRequest();
      req.open("POST", gasUrl, true);
  
      req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
      req.onreadystatechange = function()
      {
          var READYSTATE_COMPLETED = 4; // readyStateの値
          if( this.readyState == READYSTATE_COMPLETED )
          {
              var HTTP_STATUS_OK = 200; // HTTPステータス コード
              if( this.status == HTTP_STATUS_OK )
              {
                  // サーバから受信したレスポンス
                  callback(this.responseText);
              }
              else
              {
                  // エラーを表示する
                  alert( this.status + this.statusText );
              }
          }
      }
  
      req.send(request.message);
  
      // 非同期を同期的に扱うためのtrue
      return true;
    }
  );