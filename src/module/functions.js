 ISEMPTY = ({
    _isEmpty(val) {
        if (val === undefined || val === null || val === NaN || val.length <= 0 || val === '') {
            return false
        }
        return true
    }
  });
  module.exports = ISEMPTY