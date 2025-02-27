import React, { useState } from 'react'

// Hook 함수 :
// - react에서 컴포넌트의 생명주기 및 상태에 따라 특정 작업을 수행하도록 하는 특별한 함수
// - use로 시작하는 함수

// - useState : 컴포넌트의 상태 관리를 가능하게 해주는 함수 (상태 생성, 업데이트, 상태 접근)
// - uesEffect : 컴포넌트의 생명주기에 따라 특정 작업을 수행할 수 있도록 하는 함수 (mount, update, unmount에 해당하는 생명주기에 따라 실행)
// - useRef : 특정 데이터를 기억하기 위한 함수 값이 변경되더라고 렌더링을 수행하고 싶지 않을 때, DOM 요소를 기억하고 싶을 때 사용

// - uesContext : 컴포넌트 트리 상에서 전역 상태를 공유하고자 할때 사용하는 함수
// - useReducer : 상태와 관련된 로직을 관리하는 함수 (상태 업데이트 함수를 컴포넌트 외부로 옮길 수 있도록하여 코드 관리를 수월하게 도와줌)
// - useCallback : 메모리 상에서 함수를 재호출할 수 있도록 하는 함수 (렌더링 혹은 이벤트 없이 특정 함수를 호출할 때)
// - useMemo : 메모리 내에 함수의 결과를 저장하여 함수 재호출하지 않고 결과를 사용할 수 있도록 하는 함수

// - hook 함수는 반드시 함수형 컴포넌트 코드 블럭 라인에 존재해야 함

export default function HookComponent1() {

    const [state, setState] = useState<number>(0);
    const [show, setShow] = useState<boolean>(false);

    // - hook 함수는 반드시 함수형 컴포넌트 코드 블럭 라인에 존재해야 함
    // const func = () => {
    //     const [state, setState] = useState<number>(0);
    // }

    // useEffect :
    // - 컴포넌트의 생명주기에 따라 특정 함수를 호출하는 훅 함수
    // - mount : 컴포넌트가 처음 화면에 등록되었을 때
    // - update : 컴포넌트 상태가 변경 혹은 지정되면서 렌더링 되었을 때
    // - unmount : 컴포넌트가 화면에서 제거 되었을 때
    // - useEffect(호출할 콜백 함수, 스코프할 상태 배열);
    // 기억! 개발 환경에서는 mount - unmount - mount 단계를 거침

    return (
    <div>HookComponent1</div>
    )
}
