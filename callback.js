	function somefunc(callback) {
	    //somefunc의 기능을 수행하고 난 후에 
	    // callback 함수를 실행하도록 한다.
	    console.log("somefunc 실행");
	    callback();
	}

	//somefunc의 callback으로 사용할 함수
	// 콜백함수
	// 콜백함수는 함수의 인자로 전달되는 함수를 말한다.  
	// 콜백함수를 사용하는 이유는 순서대로 실행되는 것이 아니라,
	// 어떤 함수의 실행이 끝난 후에 실행되어야 하는 함수를 실행하기 위해서이다.
	// 즉, 자신이 원하는 순서대로 실행되도록 하기 위해서이다.
	function cb() {
	    console.log("콜백함수 실행");
	}

	somefunc(function() {
	    console.log("콜백함수 실행")
	});