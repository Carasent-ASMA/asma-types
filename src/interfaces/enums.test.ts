import assert from 'node:assert/strict'
import { test } from 'node:test'

import { DocStatus, getDocStatus } from './enums'

test('getDocStatus: for_signing + completed is Signed', () => {
    assert.equal(getDocStatus({ for_signing: true, signicat_status: 'completed' }), DocStatus.Signed)
})

test('getDocStatus: for_signing + rejected is Rejected', () => {
    assert.equal(getDocStatus({ for_signing: true, signicat_status: 'rejected' }), DocStatus.Rejected)
})

test('getDocStatus: for_signing + waiting is WaitingForSigning', () => {
    assert.equal(getDocStatus({ for_signing: true, signicat_status: 'waiting' }), DocStatus.WaitingForSigning)
})

test('getDocStatus: for_signing + NULL signicat_status is WaitingForSigning, not OnlyForView', () => {
    assert.equal(getDocStatus({ for_signing: true, signicat_status: null }), DocStatus.WaitingForSigning)
})

test('getDocStatus: for_signing + missing signicat_status is WaitingForSigning', () => {
    assert.equal(getDocStatus({ for_signing: true }), DocStatus.WaitingForSigning)
})

test('getDocStatus: for_signing + an unknown signicat_status is WaitingForSigning', () => {
    assert.equal(getDocStatus({ for_signing: true, signicat_status: 'in_progress' }), DocStatus.WaitingForSigning)
})

test('getDocStatus: not for_signing is OnlyForView whatever signicat_status says', () => {
    assert.equal(getDocStatus({ for_signing: false, signicat_status: 'completed' }), DocStatus.OnlyForView)
    assert.equal(getDocStatus({ for_signing: false, signicat_status: 'rejected' }), DocStatus.OnlyForView)
    assert.equal(getDocStatus({ for_signing: false, signicat_status: null }), DocStatus.OnlyForView)
})

test('getDocStatus: NULL or missing for_signing is OnlyForView', () => {
    assert.equal(getDocStatus({ for_signing: null, signicat_status: 'waiting' }), DocStatus.OnlyForView)
    assert.equal(getDocStatus({}), DocStatus.OnlyForView)
})
