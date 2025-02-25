import React, { ReactNode } from 'react'

// Properties (속성)
// - 부모 컴포넌트(호출부)에서 자식 컴포넌트로 데이터를 전달하기 위한 *객체*
// - 부모 컴포넌트에서는 HTML과 동일한 방식으로(속성=값) 전달
// - 자식 컴포넌트에서는 함수의 매개변수로 속성을 받음
// - 전달할 수 있는 데이터는 변수에 담을 수 있는 모든 데이터 형식

// - 컴포넌트가 리렌더링되는 기준
// - 속성은 부모 -> 자식으로 데이터 전송 O / 자식 -> 부모로 데이터 전송 X

interface Props {
    title: string;
    subTitle: string;
    contents: string;
    }

function Article(props: Props) {
    return (
    <article style={{ border: '1px solid gray', marginBottom: '8px' }}>
        <h1>{props.title}</h1>
        <h3>{props.subTitle}</h3>
        <p>{props.contents}</p>
    </article>
    )
}

interface Props2 {
    getTitle: () => string;
    children: ReactNode
}

function Child(props: Props2) {

    return (
        <div>
            <h1>{props.getTitle()}</h1>
            {props.children}
        </div>
    )

}


export default function Properties() {

    const article: Props = {
        title: '발로 뛰는 대신 AI로',
        subTitle: 'AI가 기업을 바꾼다.',
        contents: '제품도 뛰어난데 무엇보다.....'
    }

    const getTilte = () => {
        return '컴포넌트 관리'
    }

    return (
    <div>
        <Article title='애들 보는거 아닌가요? 찬밥신세...'
        subTitle='C애니의 습격... 길 잃은 K애니' contents='한때 한국 애니의 갑절......'/>
        <Article title={article.title} subTitle={article.subTitle} contents={article.contents}/>
        <Article {...article}/>
        <Child getTitle={getTilte}>
        <p>익숙한 속성...</p>
        </Child>
    </div>
    )
}
