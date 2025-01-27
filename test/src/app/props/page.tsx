'use client'

import * as React from 'react'

import { BaseOTPInput } from '@/components/base-input'

export default function Page() {
  return (
    <div className="container relative flex-1 flex flex-col justify-center items-center">
      <BaseOTPInput data-testid="input-otp-wrapper-1" disabled />
      <BaseOTPInput data-testid="input-otp-wrapper-2" inputMode='numeric' />
      <BaseOTPInput data-testid="input-otp-wrapper-3" inputMode='text' />
      <BaseOTPInput data-testid="input-otp-wrapper-4" containerClassName='testclassname' />
      <BaseOTPInput data-testid="input-otp-wrapper-5" maxLength={3} />
      <BaseOTPInput data-testid="input-otp-wrapper-6" id='testid' name='testname'  />
      <BaseOTPInput data-testid="input-otp-wrapper-7" pattern={' '}  />
    </div>
  )
}
