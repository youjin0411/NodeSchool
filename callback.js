	function somefunc(callback) {
	    //somefunc의 기능을 수행하고 난 후에 
	    // callback 함수를 실행하도록 한다.
	    console.log("somefunc 실행");
	    callback();
	}

	//somefunc의 callback으로 사용할 함수
	// 콜백함수
	// 콜백함수는 함수의 인자로 전달되는 함수를 말한다.  
	function cb() {
	    console.log("콜백함수 실행");
	}

	somefunc(cb);