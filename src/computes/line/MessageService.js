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

var MessageService_fetchMessageOperations_args = function(args) {
  this.localRevision = null;
  this.lastOpTimestamp = null;
  this.count = null;
  if (args) {
    if (args.localRevision !== undefined && args.localRevision !== null) {
      this.localRevision = args.localRevision;
    }
    if (args.lastOpTimestamp !== undefined && args.lastOpTimestamp !== null) {
      this.lastOpTimestamp = args.lastOpTimestamp;
    }
    if (args.count !== undefined && args.count !== null) {
      this.count = args.count;
    }
  }
};
MessageService_fetchMessageOperations_args.prototype = {};
MessageService_fetchMessageOperations_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I64) {
        this.localRevision = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.lastOpTimestamp = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.count = input.readI32();
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

MessageService_fetchMessageOperations_args.prototype.write = function(output) {
  output.writeStructBegin('MessageService_fetchMessageOperations_args');
  if (this.localRevision !== null && this.localRevision !== undefined) {
    output.writeFieldBegin('localRevision', Thrift.Type.I64, 2);
    output.writeI64(this.localRevision);
    output.writeFieldEnd();
  }
  if (this.lastOpTimestamp !== null && this.lastOpTimestamp !== undefined) {
    output.writeFieldBegin('lastOpTimestamp', Thrift.Type.I64, 3);
    output.writeI64(this.lastOpTimestamp);
    output.writeFieldEnd();
  }
  if (this.count !== null && this.count !== undefined) {
    output.writeFieldBegin('count', Thrift.Type.I32, 4);
    output.writeI32(this.count);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MessageService_fetchMessageOperations_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.MessageOperations(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
MessageService_fetchMessageOperations_result.prototype = {};
MessageService_fetchMessageOperations_result.prototype.read = function(input) {
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
        this.success = new ttypes.MessageOperations();
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

MessageService_fetchMessageOperations_result.prototype.write = function(output) {
  output.writeStructBegin('MessageService_fetchMessageOperations_result');
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

var MessageService_getLastReadMessageIds_args = function(args) {
  this.chatId = null;
  if (args) {
    if (args.chatId !== undefined && args.chatId !== null) {
      this.chatId = args.chatId;
    }
  }
};
MessageService_getLastReadMessageIds_args.prototype = {};
MessageService_getLastReadMessageIds_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRING) {
        this.chatId = input.readString();
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

MessageService_getLastReadMessageIds_args.prototype.write = function(output) {
  output.writeStructBegin('MessageService_getLastReadMessageIds_args');
  if (this.chatId !== null && this.chatId !== undefined) {
    output.writeFieldBegin('chatId', Thrift.Type.STRING, 2);
    output.writeString(this.chatId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MessageService_getLastReadMessageIds_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.LastReadMessageIds(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
MessageService_getLastReadMessageIds_result.prototype = {};
MessageService_getLastReadMessageIds_result.prototype.read = function(input) {
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
        this.success = new ttypes.LastReadMessageIds();
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

MessageService_getLastReadMessageIds_result.prototype.write = function(output) {
  output.writeStructBegin('MessageService_getLastReadMessageIds_result');
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

var MessageService_multiGetLastReadMessageIds_args = function(args) {
  this.chatIds = null;
  if (args) {
    if (args.chatIds !== undefined && args.chatIds !== null) {
      this.chatIds = Thrift.copyList(args.chatIds, [null]);
    }
  }
};
MessageService_multiGetLastReadMessageIds_args.prototype = {};
MessageService_multiGetLastReadMessageIds_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.LIST) {
        var _size752 = 0;
        var _rtmp3756;
        this.chatIds = [];
        var _etype755 = 0;
        _rtmp3756 = input.readListBegin();
        _etype755 = _rtmp3756.etype;
        _size752 = _rtmp3756.size;
        for (var _i757 = 0; _i757 < _size752; ++_i757)
        {
          var elem758 = null;
          elem758 = input.readString();
          this.chatIds.push(elem758);
        }
        input.readListEnd();
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

MessageService_multiGetLastReadMessageIds_args.prototype.write = function(output) {
  output.writeStructBegin('MessageService_multiGetLastReadMessageIds_args');
  if (this.chatIds !== null && this.chatIds !== undefined) {
    output.writeFieldBegin('chatIds', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRING, this.chatIds.length);
    for (var iter759 in this.chatIds)
    {
      if (this.chatIds.hasOwnProperty(iter759))
      {
        iter759 = this.chatIds[iter759];
        output.writeString(iter759);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MessageService_multiGetLastReadMessageIds_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [ttypes.LastReadMessageIds]);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
MessageService_multiGetLastReadMessageIds_result.prototype = {};
MessageService_multiGetLastReadMessageIds_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.LIST) {
        var _size760 = 0;
        var _rtmp3764;
        this.success = [];
        var _etype763 = 0;
        _rtmp3764 = input.readListBegin();
        _etype763 = _rtmp3764.etype;
        _size760 = _rtmp3764.size;
        for (var _i765 = 0; _i765 < _size760; ++_i765)
        {
          var elem766 = null;
          elem766 = new ttypes.LastReadMessageIds();
          elem766.read(input);
          this.success.push(elem766);
        }
        input.readListEnd();
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

MessageService_multiGetLastReadMessageIds_result.prototype.write = function(output) {
  output.writeStructBegin('MessageService_multiGetLastReadMessageIds_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter767 in this.success)
    {
      if (this.success.hasOwnProperty(iter767))
      {
        iter767 = this.success[iter767];
        iter767.write(output);
      }
    }
    output.writeListEnd();
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

var MessageServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
MessageServiceClient.prototype = {};
MessageServiceClient.prototype.seqid = function() { return this._seqid; };
MessageServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };
MessageServiceClient.prototype.fetchMessageOperations = function(localRevision, lastOpTimestamp, count, callback) {
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
    this.send_fetchMessageOperations(localRevision, lastOpTimestamp, count);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_fetchMessageOperations(localRevision, lastOpTimestamp, count);
  }
};

MessageServiceClient.prototype.send_fetchMessageOperations = function(localRevision, lastOpTimestamp, count) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('fetchMessageOperations', Thrift.MessageType.CALL, this.seqid());
  var params = {
    localRevision: localRevision,
    lastOpTimestamp: lastOpTimestamp,
    count: count
  };
  var args = new MessageService_fetchMessageOperations_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

MessageServiceClient.prototype.recv_fetchMessageOperations = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new MessageService_fetchMessageOperations_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('fetchMessageOperations failed: unknown result');
};
MessageServiceClient.prototype.getLastReadMessageIds = function(chatId, callback) {
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
    this.send_getLastReadMessageIds(chatId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getLastReadMessageIds(chatId);
  }
};

MessageServiceClient.prototype.send_getLastReadMessageIds = function(chatId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getLastReadMessageIds', Thrift.MessageType.CALL, this.seqid());
  var params = {
    chatId: chatId
  };
  var args = new MessageService_getLastReadMessageIds_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

MessageServiceClient.prototype.recv_getLastReadMessageIds = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new MessageService_getLastReadMessageIds_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getLastReadMessageIds failed: unknown result');
};
MessageServiceClient.prototype.multiGetLastReadMessageIds = function(chatIds, callback) {
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
    this.send_multiGetLastReadMessageIds(chatIds);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_multiGetLastReadMessageIds(chatIds);
  }
};

MessageServiceClient.prototype.send_multiGetLastReadMessageIds = function(chatIds) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('multiGetLastReadMessageIds', Thrift.MessageType.CALL, this.seqid());
  var params = {
    chatIds: chatIds
  };
  var args = new MessageService_multiGetLastReadMessageIds_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

MessageServiceClient.prototype.recv_multiGetLastReadMessageIds = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new MessageService_multiGetLastReadMessageIds_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('multiGetLastReadMessageIds failed: unknown result');
};
var MessageServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
MessageServiceProcessor.prototype.process = function(input, output) {
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
MessageServiceProcessor.prototype.process_fetchMessageOperations = function(seqid, input, output) {
  var args = new MessageService_fetchMessageOperations_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.fetchMessageOperations.length === 3) {
    Q.fcall(this._handler.fetchMessageOperations.bind(this._handler), args.localRevision, args.lastOpTimestamp, args.count)
      .then(function(result) {
        var result_obj = new MessageService_fetchMessageOperations_result({success: result});
        output.writeMessageBegin("fetchMessageOperations", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new MessageService_fetchMessageOperations_result(err);
          output.writeMessageBegin("fetchMessageOperations", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("fetchMessageOperations", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.fetchMessageOperations(args.localRevision, args.lastOpTimestamp, args.count, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new MessageService_fetchMessageOperations_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("fetchMessageOperations", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("fetchMessageOperations", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
MessageServiceProcessor.prototype.process_getLastReadMessageIds = function(seqid, input, output) {
  var args = new MessageService_getLastReadMessageIds_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getLastReadMessageIds.length === 1) {
    Q.fcall(this._handler.getLastReadMessageIds.bind(this._handler), args.chatId)
      .then(function(result) {
        var result_obj = new MessageService_getLastReadMessageIds_result({success: result});
        output.writeMessageBegin("getLastReadMessageIds", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new MessageService_getLastReadMessageIds_result(err);
          output.writeMessageBegin("getLastReadMessageIds", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getLastReadMessageIds", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getLastReadMessageIds(args.chatId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new MessageService_getLastReadMessageIds_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getLastReadMessageIds", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getLastReadMessageIds", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
MessageServiceProcessor.prototype.process_multiGetLastReadMessageIds = function(seqid, input, output) {
  var args = new MessageService_multiGetLastReadMessageIds_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.multiGetLastReadMessageIds.length === 1) {
    Q.fcall(this._handler.multiGetLastReadMessageIds.bind(this._handler), args.chatIds)
      .then(function(result) {
        var result_obj = new MessageService_multiGetLastReadMessageIds_result({success: result});
        output.writeMessageBegin("multiGetLastReadMessageIds", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new MessageService_multiGetLastReadMessageIds_result(err);
          output.writeMessageBegin("multiGetLastReadMessageIds", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("multiGetLastReadMessageIds", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.multiGetLastReadMessageIds(args.chatIds, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new MessageService_multiGetLastReadMessageIds_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("multiGetLastReadMessageIds", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("multiGetLastReadMessageIds", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
