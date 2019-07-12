import React from 'react'

export default function noMatch({status}) {
  return (
    <div>
        {status} 该页面不存在,请重新输入
    </div>
  )
}
