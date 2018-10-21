require('should')
const { buildAttachments } = require('../')
const { success, failure } = require('./sampleSnsEvent.js')


describe('buildAttachements()', () => {
  describe('Success', () => {
    let attachements, attachment
    beforeEach(() => {
      attachements = buildAttachments(success)
      attachment = attachements[0]
    })

    it('should return Array', () => {
      attachements.should.be.instanceOf(Array)
    })
    it('should have author_name', () => {
      const expected = 'APP-ENV'
      attachment.should.have.property('author_name', expected)
    })
    it('should have highlighted text', () => {
      const expected = '*Environment health has transitioned from Ok to Info*. Application update in progress on 1 instance. 0 out of 1 instance completed (running for 19 seconds).'
      attachment.should.have.property('text', expected)
    })
    it('should have color of good', () => {
      const expected = 'good'
      attachment.should.have.property('color', expected)
    })
  })

  describe('Error', () => {
    let attachements, attachment
    beforeEach(() => {
      attachements = buildAttachments(failure)
      attachment = attachements[0]
    })
    it('should have color of danger', () => {
      const expected = 'danger'
      attachment.should.have.property('color', expected)
    })
  })
})
