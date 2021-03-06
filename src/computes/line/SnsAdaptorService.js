/* eslint-disable */
/*
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2020 SuperSonic. (https://github.com/supersonictw)
*/

"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./line_types');
//HELPER FUNCTIONS AND STRUCTURES

var SnsAdaptorService_getSnsFriends_args = function(args) {
  this.snsIdType = null;
  this.snsAccessToken = null;
  this.startIdx = null;
  this.limit = null;
  if (args) {
    if (args.snsIdType !== undefined && args.snsIdType !== null) {
      this.snsIdType = args.snsIdType;
    }
    if (args.snsAccessToken !== undefined && args.snsAccessToken !== null) {
      this.snsAccessToken = args.snsAccessToken;
    }
    if (args.startIdx !== undefined && args.startIdx !== null) {
      this.startIdx = args.startIdx;
    }
    if (args.limit !== undefined && args.limit !== null) {
      this.limit = args.limit;
    }
  }
};
SnsAdaptorService_getSnsFriends_args.prototype = {};
SnsAdaptorService_getSnsFriends_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.snsIdType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.snsAccessToken = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.startIdx = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.limit = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SnsAdaptorService_getSnsFriends_args.prototype.write = function(output) {
  output.writeStructBegin('SnsAdaptorService_getSnsFriends_args');
  if (this.snsIdType !== null && this.snsIdType !== undefined) {
    output.writeFieldBegin('snsIdType', Thrift.Type.I32, 2);
    output.writeI32(this.snsIdType);
    output.writeFieldEnd();
  }
  if (this.snsAccessToken !== null && this.snsAccessToken !== undefined) {
    output.writeFieldBegin('snsAccessToken', Thrift.Type.STRING, 3);
    output.writeString(this.snsAccessToken);
    output.writeFieldEnd();
  }
  if (this.startIdx !== null && this.startIdx !== undefined) {
    output.writeFieldBegin('startIdx', Thrift.Type.I32, 4);
    output.writeI32(this.startIdx);
    output.writeFieldEnd();
  }
  if (this.limit !== null && this.limit !== undefined) {
    output.writeFieldBegin('limit', Thrift.Type.I32, 5);
    output.writeI32(this.limit);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SnsAdaptorService_getSnsFriends_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.SnsFriends(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
SnsAdaptorService_getSnsFriends_result.prototype = {};
SnsAdaptorService_getSnsFriends_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.SnsFriends();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SnsAdaptorService_getSnsFriends_result.prototype.write = function(output) {
  output.writeStructBegin('SnsAdaptorService_getSnsFriends_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SnsAdaptorService_getSnsMyProfile_args = function(args) {
  this.snsIdType = null;
  this.snsAccessToken = null;
  if (args) {
    if (args.snsIdType !== undefined && args.snsIdType !== null) {
      this.snsIdType = args.snsIdType;
    }
    if (args.snsAccessToken !== undefined && args.snsAccessToken !== null) {
      this.snsAccessToken = args.snsAccessToken;
    }
  }
};
SnsAdaptorService_getSnsMyProfile_args.prototype = {};
SnsAdaptorService_getSnsMyProfile_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.snsIdType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.snsAccessToken = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SnsAdaptorService_getSnsMyProfile_args.prototype.write = function(output) {
  output.writeStructBegin('SnsAdaptorService_getSnsMyProfile_args');
  if (this.snsIdType !== null && this.snsIdType !== undefined) {
    output.writeFieldBegin('snsIdType', Thrift.Type.I32, 2);
    output.writeI32(this.snsIdType);
    output.writeFieldEnd();
  }
  if (this.snsAccessToken !== null && this.snsAccessToken !== undefined) {
    output.writeFieldBegin('snsAccessToken', Thrift.Type.STRING, 3);
    output.writeString(this.snsAccessToken);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SnsAdaptorService_getSnsMyProfile_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.SnsProfile(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
SnsAdaptorService_getSnsMyProfile_result.prototype = {};
SnsAdaptorService_getSnsMyProfile_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.SnsProfile();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SnsAdaptorService_getSnsMyProfile_result.prototype.write = function(output) {
  output.writeStructBegin('SnsAdaptorService_getSnsMyProfile_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SnsAdaptorService_postSnsInvitationMessage_args = function(args) {
  this.snsIdType = null;
  this.snsAccessToken = null;
  this.toSnsUserId = null;
  if (args) {
    if (args.snsIdType !== undefined && args.snsIdType !== null) {
      this.snsIdType = args.snsIdType;
    }
    if (args.snsAccessToken !== undefined && args.snsAccessToken !== null) {
      this.snsAccessToken = args.snsAccessToken;
    }
    if (args.toSnsUserId !== undefined && args.toSnsUserId !== null) {
      this.toSnsUserId = args.toSnsUserId;
    }
  }
};
SnsAdaptorService_postSnsInvitationMessage_args.prototype = {};
SnsAdaptorService_postSnsInvitationMessage_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.snsIdType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.snsAccessToken = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.toSnsUserId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SnsAdaptorService_postSnsInvitationMessage_args.prototype.write = function(output) {
  output.writeStructBegin('SnsAdaptorService_postSnsInvitationMessage_args');
  if (this.snsIdType !== null && this.snsIdType !== undefined) {
    output.writeFieldBegin('snsIdType', Thrift.Type.I32, 2);
    output.writeI32(this.snsIdType);
    output.writeFieldEnd();
  }
  if (this.snsAccessToken !== null && this.snsAccessToken !== undefined) {
    output.writeFieldBegin('snsAccessToken', Thrift.Type.STRING, 3);
    output.writeString(this.snsAccessToken);
    output.writeFieldEnd();
  }
  if (this.toSnsUserId !== null && this.toSnsUserId !== undefined) {
    output.writeFieldBegin('toSnsUserId', Thrift.Type.STRING, 4);
    output.writeString(this.toSnsUserId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SnsAdaptorService_postSnsInvitationMessage_result = function(args) {
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
SnsAdaptorService_postSnsInvitationMessage_result.prototype = {};
SnsAdaptorService_postSnsInvitationMessage_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.TalkException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SnsAdaptorService_postSnsInvitationMessage_result.prototype.write = function(output) {
  output.writeStructBegin('SnsAdaptorService_postSnsInvitationMessage_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SnsAdaptorServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
SnsAdaptorServiceClient.prototype = {};
SnsAdaptorServiceClient.prototype.seqid = function() { return this._seqid; };
SnsAdaptorServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };
SnsAdaptorServiceClient.prototype.getSnsFriends = function(snsIdType, snsAccessToken, startIdx, limit, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getSnsFriends(snsIdType, snsAccessToken, startIdx, limit);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getSnsFriends(snsIdType, snsAccessToken, startIdx, limit);
  }
};

SnsAdaptorServiceClient.prototype.send_getSnsFriends = function(snsIdType, snsAccessToken, startIdx, limit) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getSnsFriends', Thrift.MessageType.CALL, this.seqid());
  var params = {
    snsIdType: snsIdType,
    snsAccessToken: snsAccessToken,
    startIdx: startIdx,
    limit: limit
  };
  var args = new SnsAdaptorService_getSnsFriends_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

SnsAdaptorServiceClient.prototype.recv_getSnsFriends = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new SnsAdaptorService_getSnsFriends_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getSnsFriends failed: unknown result');
};
SnsAdaptorServiceClient.prototype.getSnsMyProfile = function(snsIdType, snsAccessToken, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getSnsMyProfile(snsIdType, snsAccessToken);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getSnsMyProfile(snsIdType, snsAccessToken);
  }
};

SnsAdaptorServiceClient.prototype.send_getSnsMyProfile = function(snsIdType, snsAccessToken) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getSnsMyProfile', Thrift.MessageType.CALL, this.seqid());
  var params = {
    snsIdType: snsIdType,
    snsAccessToken: snsAccessToken
  };
  var args = new SnsAdaptorService_getSnsMyProfile_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

SnsAdaptorServiceClient.prototype.recv_getSnsMyProfile = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new SnsAdaptorService_getSnsMyProfile_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getSnsMyProfile failed: unknown result');
};
SnsAdaptorServiceClient.prototype.postSnsInvitationMessage = function(snsIdType, snsAccessToken, toSnsUserId, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_postSnsInvitationMessage(snsIdType, snsAccessToken, toSnsUserId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_postSnsInvitationMessage(snsIdType, snsAccessToken, toSnsUserId);
  }
};

SnsAdaptorServiceClient.prototype.send_postSnsInvitationMessage = function(snsIdType, snsAccessToken, toSnsUserId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('postSnsInvitationMessage', Thrift.MessageType.CALL, this.seqid());
  var params = {
    snsIdType: snsIdType,
    snsAccessToken: snsAccessToken,
    toSnsUserId: toSnsUserId
  };
  var args = new SnsAdaptorService_postSnsInvitationMessage_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

SnsAdaptorServiceClient.prototype.recv_postSnsInvitationMessage = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new SnsAdaptorService_postSnsInvitationMessage_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
var SnsAdaptorServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
SnsAdaptorServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}
;
SnsAdaptorServiceProcessor.prototype.process_getSnsFriends = function(seqid, input, output) {
  var args = new SnsAdaptorService_getSnsFriends_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getSnsFriends.length === 4) {
    Q.fcall(this._handler.getSnsFriends.bind(this._handler), args.snsIdType, args.snsAccessToken, args.startIdx, args.limit)
      .then(function(result) {
        var result_obj = new SnsAdaptorService_getSnsFriends_result({success: result});
        output.writeMessageBegin("getSnsFriends", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new SnsAdaptorService_getSnsFriends_result(err);
          output.writeMessageBegin("getSnsFriends", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getSnsFriends", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getSnsFriends(args.snsIdType, args.snsAccessToken, args.startIdx, args.limit, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new SnsAdaptorService_getSnsFriends_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getSnsFriends", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getSnsFriends", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
SnsAdaptorServiceProcessor.prototype.process_getSnsMyProfile = function(seqid, input, output) {
  var args = new SnsAdaptorService_getSnsMyProfile_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getSnsMyProfile.length === 2) {
    Q.fcall(this._handler.getSnsMyProfile.bind(this._handler), args.snsIdType, args.snsAccessToken)
      .then(function(result) {
        var result_obj = new SnsAdaptorService_getSnsMyProfile_result({success: result});
        output.writeMessageBegin("getSnsMyProfile", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new SnsAdaptorService_getSnsMyProfile_result(err);
          output.writeMessageBegin("getSnsMyProfile", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getSnsMyProfile", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getSnsMyProfile(args.snsIdType, args.snsAccessToken, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new SnsAdaptorService_getSnsMyProfile_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getSnsMyProfile", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getSnsMyProfile", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
SnsAdaptorServiceProcessor.prototype.process_postSnsInvitationMessage = function(seqid, input, output) {
  var args = new SnsAdaptorService_postSnsInvitationMessage_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.postSnsInvitationMessage.length === 3) {
    Q.fcall(this._handler.postSnsInvitationMessage.bind(this._handler), args.snsIdType, args.snsAccessToken, args.toSnsUserId)
      .then(function(result) {
        var result_obj = new SnsAdaptorService_postSnsInvitationMessage_result({success: result});
        output.writeMessageBegin("postSnsInvitationMessage", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new SnsAdaptorService_postSnsInvitationMessage_result(err);
          output.writeMessageBegin("postSnsInvitationMessage", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("postSnsInvitationMessage", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.postSnsInvitationMessage(args.snsIdType, args.snsAccessToken, args.toSnsUserId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new SnsAdaptorService_postSnsInvitationMessage_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("postSnsInvitationMessage", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("postSnsInvitationMessage", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
