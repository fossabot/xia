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

var ShopService_buyCoinProduct_args = function(args) {
  this.paymentReservation = null;
  if (args) {
    if (args.paymentReservation !== undefined && args.paymentReservation !== null) {
      this.paymentReservation = new ttypes.PaymentReservation(args.paymentReservation);
    }
  }
};
ShopService_buyCoinProduct_args.prototype = {};
ShopService_buyCoinProduct_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.paymentReservation = new ttypes.PaymentReservation();
        this.paymentReservation.read(input);
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

ShopService_buyCoinProduct_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_buyCoinProduct_args');
  if (this.paymentReservation !== null && this.paymentReservation !== undefined) {
    output.writeFieldBegin('paymentReservation', Thrift.Type.STRUCT, 2);
    this.paymentReservation.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_buyCoinProduct_result = function(args) {
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
ShopService_buyCoinProduct_result.prototype = {};
ShopService_buyCoinProduct_result.prototype.read = function(input) {
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

ShopService_buyCoinProduct_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_buyCoinProduct_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_buyFreeProduct_args = function(args) {
  this.receiverMid = null;
  this.productId = null;
  this.messageTemplate = null;
  this.language = null;
  this.country = null;
  this.packageId = null;
  if (args) {
    if (args.receiverMid !== undefined && args.receiverMid !== null) {
      this.receiverMid = args.receiverMid;
    }
    if (args.productId !== undefined && args.productId !== null) {
      this.productId = args.productId;
    }
    if (args.messageTemplate !== undefined && args.messageTemplate !== null) {
      this.messageTemplate = args.messageTemplate;
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
    if (args.packageId !== undefined && args.packageId !== null) {
      this.packageId = args.packageId;
    }
  }
};
ShopService_buyFreeProduct_args.prototype = {};
ShopService_buyFreeProduct_args.prototype.read = function(input) {
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
        this.receiverMid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.productId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.messageTemplate = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I64) {
        this.packageId = input.readI64();
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

ShopService_buyFreeProduct_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_buyFreeProduct_args');
  if (this.receiverMid !== null && this.receiverMid !== undefined) {
    output.writeFieldBegin('receiverMid', Thrift.Type.STRING, 2);
    output.writeString(this.receiverMid);
    output.writeFieldEnd();
  }
  if (this.productId !== null && this.productId !== undefined) {
    output.writeFieldBegin('productId', Thrift.Type.STRING, 3);
    output.writeString(this.productId);
    output.writeFieldEnd();
  }
  if (this.messageTemplate !== null && this.messageTemplate !== undefined) {
    output.writeFieldBegin('messageTemplate', Thrift.Type.I32, 4);
    output.writeI32(this.messageTemplate);
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 5);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 6);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  if (this.packageId !== null && this.packageId !== undefined) {
    output.writeFieldBegin('packageId', Thrift.Type.I64, 7);
    output.writeI64(this.packageId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_buyFreeProduct_result = function(args) {
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
ShopService_buyFreeProduct_result.prototype = {};
ShopService_buyFreeProduct_result.prototype.read = function(input) {
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

ShopService_buyFreeProduct_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_buyFreeProduct_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_buyMustbuyProduct_args = function(args) {
  this.receiverMid = null;
  this.productId = null;
  this.messageTemplate = null;
  this.language = null;
  this.country = null;
  this.packageId = null;
  this.serialNumber = null;
  if (args) {
    if (args.receiverMid !== undefined && args.receiverMid !== null) {
      this.receiverMid = args.receiverMid;
    }
    if (args.productId !== undefined && args.productId !== null) {
      this.productId = args.productId;
    }
    if (args.messageTemplate !== undefined && args.messageTemplate !== null) {
      this.messageTemplate = args.messageTemplate;
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
    if (args.packageId !== undefined && args.packageId !== null) {
      this.packageId = args.packageId;
    }
    if (args.serialNumber !== undefined && args.serialNumber !== null) {
      this.serialNumber = args.serialNumber;
    }
  }
};
ShopService_buyMustbuyProduct_args.prototype = {};
ShopService_buyMustbuyProduct_args.prototype.read = function(input) {
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
        this.receiverMid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.productId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.messageTemplate = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I64) {
        this.packageId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRING) {
        this.serialNumber = input.readString();
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

ShopService_buyMustbuyProduct_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_buyMustbuyProduct_args');
  if (this.receiverMid !== null && this.receiverMid !== undefined) {
    output.writeFieldBegin('receiverMid', Thrift.Type.STRING, 2);
    output.writeString(this.receiverMid);
    output.writeFieldEnd();
  }
  if (this.productId !== null && this.productId !== undefined) {
    output.writeFieldBegin('productId', Thrift.Type.STRING, 3);
    output.writeString(this.productId);
    output.writeFieldEnd();
  }
  if (this.messageTemplate !== null && this.messageTemplate !== undefined) {
    output.writeFieldBegin('messageTemplate', Thrift.Type.I32, 4);
    output.writeI32(this.messageTemplate);
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 5);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 6);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  if (this.packageId !== null && this.packageId !== undefined) {
    output.writeFieldBegin('packageId', Thrift.Type.I64, 7);
    output.writeI64(this.packageId);
    output.writeFieldEnd();
  }
  if (this.serialNumber !== null && this.serialNumber !== undefined) {
    output.writeFieldBegin('serialNumber', Thrift.Type.STRING, 8);
    output.writeString(this.serialNumber);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_buyMustbuyProduct_result = function(args) {
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
ShopService_buyMustbuyProduct_result.prototype = {};
ShopService_buyMustbuyProduct_result.prototype.read = function(input) {
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

ShopService_buyMustbuyProduct_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_buyMustbuyProduct_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_checkCanReceivePresent_args = function(args) {
  this.recipientMid = null;
  this.packageId = null;
  this.language = null;
  this.country = null;
  if (args) {
    if (args.recipientMid !== undefined && args.recipientMid !== null) {
      this.recipientMid = args.recipientMid;
    }
    if (args.packageId !== undefined && args.packageId !== null) {
      this.packageId = args.packageId;
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
  }
};
ShopService_checkCanReceivePresent_args.prototype = {};
ShopService_checkCanReceivePresent_args.prototype.read = function(input) {
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
        this.recipientMid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.packageId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
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

ShopService_checkCanReceivePresent_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_checkCanReceivePresent_args');
  if (this.recipientMid !== null && this.recipientMid !== undefined) {
    output.writeFieldBegin('recipientMid', Thrift.Type.STRING, 2);
    output.writeString(this.recipientMid);
    output.writeFieldEnd();
  }
  if (this.packageId !== null && this.packageId !== undefined) {
    output.writeFieldBegin('packageId', Thrift.Type.I64, 3);
    output.writeI64(this.packageId);
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 4);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 5);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_checkCanReceivePresent_result = function(args) {
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
ShopService_checkCanReceivePresent_result.prototype = {};
ShopService_checkCanReceivePresent_result.prototype.read = function(input) {
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

ShopService_checkCanReceivePresent_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_checkCanReceivePresent_result');
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_getActivePurchases_args = function(args) {
  this.start = null;
  this.size = null;
  this.language = null;
  this.country = null;
  if (args) {
    if (args.start !== undefined && args.start !== null) {
      this.start = args.start;
    }
    if (args.size !== undefined && args.size !== null) {
      this.size = args.size;
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
  }
};
ShopService_getActivePurchases_args.prototype = {};
ShopService_getActivePurchases_args.prototype.read = function(input) {
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
        this.start = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.size = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
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

ShopService_getActivePurchases_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getActivePurchases_args');
  if (this.start !== null && this.start !== undefined) {
    output.writeFieldBegin('start', Thrift.Type.I64, 2);
    output.writeI64(this.start);
    output.writeFieldEnd();
  }
  if (this.size !== null && this.size !== undefined) {
    output.writeFieldBegin('size', Thrift.Type.I32, 3);
    output.writeI32(this.size);
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 4);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 5);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_getActivePurchases_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.ProductList(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ShopService_getActivePurchases_result.prototype = {};
ShopService_getActivePurchases_result.prototype.read = function(input) {
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
        this.success = new ttypes.ProductList();
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

ShopService_getActivePurchases_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getActivePurchases_result');
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

var ShopService_getActivePurchaseVersions_args = function(args) {
  this.start = null;
  this.size = null;
  this.language = null;
  this.country = null;
  if (args) {
    if (args.start !== undefined && args.start !== null) {
      this.start = args.start;
    }
    if (args.size !== undefined && args.size !== null) {
      this.size = args.size;
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
  }
};
ShopService_getActivePurchaseVersions_args.prototype = {};
ShopService_getActivePurchaseVersions_args.prototype.read = function(input) {
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
        this.start = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.size = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
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

ShopService_getActivePurchaseVersions_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getActivePurchaseVersions_args');
  if (this.start !== null && this.start !== undefined) {
    output.writeFieldBegin('start', Thrift.Type.I64, 2);
    output.writeI64(this.start);
    output.writeFieldEnd();
  }
  if (this.size !== null && this.size !== undefined) {
    output.writeFieldBegin('size', Thrift.Type.I32, 3);
    output.writeI32(this.size);
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 4);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 5);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_getActivePurchaseVersions_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.ProductSimpleList(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ShopService_getActivePurchaseVersions_result.prototype = {};
ShopService_getActivePurchaseVersions_result.prototype.read = function(input) {
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
        this.success = new ttypes.ProductSimpleList();
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

ShopService_getActivePurchaseVersions_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getActivePurchaseVersions_result');
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

var ShopService_getCoinProducts_args = function(args) {
  this.appStoreCode = null;
  this.country = null;
  this.language = null;
  if (args) {
    if (args.appStoreCode !== undefined && args.appStoreCode !== null) {
      this.appStoreCode = args.appStoreCode;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
  }
};
ShopService_getCoinProducts_args.prototype = {};
ShopService_getCoinProducts_args.prototype.read = function(input) {
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
        this.appStoreCode = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
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

ShopService_getCoinProducts_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getCoinProducts_args');
  if (this.appStoreCode !== null && this.appStoreCode !== undefined) {
    output.writeFieldBegin('appStoreCode', Thrift.Type.I32, 2);
    output.writeI32(this.appStoreCode);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 3);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 4);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_getCoinProducts_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [ttypes.CoinProductItem]);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ShopService_getCoinProducts_result.prototype = {};
ShopService_getCoinProducts_result.prototype.read = function(input) {
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
        var _size768 = 0;
        var _rtmp3772;
        this.success = [];
        var _etype771 = 0;
        _rtmp3772 = input.readListBegin();
        _etype771 = _rtmp3772.etype;
        _size768 = _rtmp3772.size;
        for (var _i773 = 0; _i773 < _size768; ++_i773)
        {
          var elem774 = null;
          elem774 = new ttypes.CoinProductItem();
          elem774.read(input);
          this.success.push(elem774);
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

ShopService_getCoinProducts_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getCoinProducts_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter775 in this.success)
    {
      if (this.success.hasOwnProperty(iter775))
      {
        iter775 = this.success[iter775];
        iter775.write(output);
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

var ShopService_getCoinProductsByPgCode_args = function(args) {
  this.appStoreCode = null;
  this.pgCode = null;
  this.country = null;
  this.language = null;
  if (args) {
    if (args.appStoreCode !== undefined && args.appStoreCode !== null) {
      this.appStoreCode = args.appStoreCode;
    }
    if (args.pgCode !== undefined && args.pgCode !== null) {
      this.pgCode = args.pgCode;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
  }
};
ShopService_getCoinProductsByPgCode_args.prototype = {};
ShopService_getCoinProductsByPgCode_args.prototype.read = function(input) {
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
        this.appStoreCode = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.pgCode = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
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

ShopService_getCoinProductsByPgCode_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getCoinProductsByPgCode_args');
  if (this.appStoreCode !== null && this.appStoreCode !== undefined) {
    output.writeFieldBegin('appStoreCode', Thrift.Type.I32, 2);
    output.writeI32(this.appStoreCode);
    output.writeFieldEnd();
  }
  if (this.pgCode !== null && this.pgCode !== undefined) {
    output.writeFieldBegin('pgCode', Thrift.Type.I32, 3);
    output.writeI32(this.pgCode);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 4);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 5);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_getCoinProductsByPgCode_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [ttypes.CoinProductItem]);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ShopService_getCoinProductsByPgCode_result.prototype = {};
ShopService_getCoinProductsByPgCode_result.prototype.read = function(input) {
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
        var _size776 = 0;
        var _rtmp3780;
        this.success = [];
        var _etype779 = 0;
        _rtmp3780 = input.readListBegin();
        _etype779 = _rtmp3780.etype;
        _size776 = _rtmp3780.size;
        for (var _i781 = 0; _i781 < _size776; ++_i781)
        {
          var elem782 = null;
          elem782 = new ttypes.CoinProductItem();
          elem782.read(input);
          this.success.push(elem782);
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

ShopService_getCoinProductsByPgCode_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getCoinProductsByPgCode_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter783 in this.success)
    {
      if (this.success.hasOwnProperty(iter783))
      {
        iter783 = this.success[iter783];
        iter783.write(output);
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

var ShopService_getCoinPurchaseHistory_args = function(args) {
  this.request = null;
  if (args) {
    if (args.request !== undefined && args.request !== null) {
      this.request = new ttypes.CoinHistoryCondition(args.request);
    }
  }
};
ShopService_getCoinPurchaseHistory_args.prototype = {};
ShopService_getCoinPurchaseHistory_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.request = new ttypes.CoinHistoryCondition();
        this.request.read(input);
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

ShopService_getCoinPurchaseHistory_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getCoinPurchaseHistory_args');
  if (this.request !== null && this.request !== undefined) {
    output.writeFieldBegin('request', Thrift.Type.STRUCT, 2);
    this.request.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_getCoinPurchaseHistory_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.CoinHistoryResult(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ShopService_getCoinPurchaseHistory_result.prototype = {};
ShopService_getCoinPurchaseHistory_result.prototype.read = function(input) {
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
        this.success = new ttypes.CoinHistoryResult();
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

ShopService_getCoinPurchaseHistory_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getCoinPurchaseHistory_result');
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

var ShopService_getCoinUseAndRefundHistory_args = function(args) {
  this.request = null;
  if (args) {
    if (args.request !== undefined && args.request !== null) {
      this.request = new ttypes.CoinHistoryCondition(args.request);
    }
  }
};
ShopService_getCoinUseAndRefundHistory_args.prototype = {};
ShopService_getCoinUseAndRefundHistory_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.request = new ttypes.CoinHistoryCondition();
        this.request.read(input);
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

ShopService_getCoinUseAndRefundHistory_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getCoinUseAndRefundHistory_args');
  if (this.request !== null && this.request !== undefined) {
    output.writeFieldBegin('request', Thrift.Type.STRUCT, 2);
    this.request.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_getCoinUseAndRefundHistory_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.CoinHistoryResult(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ShopService_getCoinUseAndRefundHistory_result.prototype = {};
ShopService_getCoinUseAndRefundHistory_result.prototype.read = function(input) {
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
        this.success = new ttypes.CoinHistoryResult();
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

ShopService_getCoinUseAndRefundHistory_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getCoinUseAndRefundHistory_result');
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

var ShopService_getDownloads_args = function(args) {
  this.start = null;
  this.size = null;
  this.language = null;
  this.country = null;
  if (args) {
    if (args.start !== undefined && args.start !== null) {
      this.start = args.start;
    }
    if (args.size !== undefined && args.size !== null) {
      this.size = args.size;
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
  }
};
ShopService_getDownloads_args.prototype = {};
ShopService_getDownloads_args.prototype.read = function(input) {
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
        this.start = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.size = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
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

ShopService_getDownloads_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getDownloads_args');
  if (this.start !== null && this.start !== undefined) {
    output.writeFieldBegin('start', Thrift.Type.I64, 2);
    output.writeI64(this.start);
    output.writeFieldEnd();
  }
  if (this.size !== null && this.size !== undefined) {
    output.writeFieldBegin('size', Thrift.Type.I32, 3);
    output.writeI32(this.size);
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 4);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 5);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_getDownloads_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.ProductList(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ShopService_getDownloads_result.prototype = {};
ShopService_getDownloads_result.prototype.read = function(input) {
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
        this.success = new ttypes.ProductList();
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

ShopService_getDownloads_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getDownloads_result');
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

var ShopService_getEventPackages_args = function(args) {
  this.start = null;
  this.size = null;
  this.language = null;
  this.country = null;
  if (args) {
    if (args.start !== undefined && args.start !== null) {
      this.start = args.start;
    }
    if (args.size !== undefined && args.size !== null) {
      this.size = args.size;
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
  }
};
ShopService_getEventPackages_args.prototype = {};
ShopService_getEventPackages_args.prototype.read = function(input) {
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
        this.start = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.size = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
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

ShopService_getEventPackages_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getEventPackages_args');
  if (this.start !== null && this.start !== undefined) {
    output.writeFieldBegin('start', Thrift.Type.I64, 2);
    output.writeI64(this.start);
    output.writeFieldEnd();
  }
  if (this.size !== null && this.size !== undefined) {
    output.writeFieldBegin('size', Thrift.Type.I32, 3);
    output.writeI32(this.size);
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 4);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 5);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_getEventPackages_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.ProductList(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ShopService_getEventPackages_result.prototype = {};
ShopService_getEventPackages_result.prototype.read = function(input) {
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
        this.success = new ttypes.ProductList();
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

ShopService_getEventPackages_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getEventPackages_result');
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

var ShopService_getNewlyReleasedPackages_args = function(args) {
  this.start = null;
  this.size = null;
  this.language = null;
  this.country = null;
  if (args) {
    if (args.start !== undefined && args.start !== null) {
      this.start = args.start;
    }
    if (args.size !== undefined && args.size !== null) {
      this.size = args.size;
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
  }
};
ShopService_getNewlyReleasedPackages_args.prototype = {};
ShopService_getNewlyReleasedPackages_args.prototype.read = function(input) {
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
        this.start = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.size = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
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

ShopService_getNewlyReleasedPackages_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getNewlyReleasedPackages_args');
  if (this.start !== null && this.start !== undefined) {
    output.writeFieldBegin('start', Thrift.Type.I64, 2);
    output.writeI64(this.start);
    output.writeFieldEnd();
  }
  if (this.size !== null && this.size !== undefined) {
    output.writeFieldBegin('size', Thrift.Type.I32, 3);
    output.writeI32(this.size);
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 4);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 5);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_getNewlyReleasedPackages_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.ProductList(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ShopService_getNewlyReleasedPackages_result.prototype = {};
ShopService_getNewlyReleasedPackages_result.prototype.read = function(input) {
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
        this.success = new ttypes.ProductList();
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

ShopService_getNewlyReleasedPackages_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getNewlyReleasedPackages_result');
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

var ShopService_getPopularPackages_args = function(args) {
  this.start = null;
  this.size = null;
  this.language = null;
  this.country = null;
  if (args) {
    if (args.start !== undefined && args.start !== null) {
      this.start = args.start;
    }
    if (args.size !== undefined && args.size !== null) {
      this.size = args.size;
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
  }
};
ShopService_getPopularPackages_args.prototype = {};
ShopService_getPopularPackages_args.prototype.read = function(input) {
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
        this.start = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.size = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
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

ShopService_getPopularPackages_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getPopularPackages_args');
  if (this.start !== null && this.start !== undefined) {
    output.writeFieldBegin('start', Thrift.Type.I64, 2);
    output.writeI64(this.start);
    output.writeFieldEnd();
  }
  if (this.size !== null && this.size !== undefined) {
    output.writeFieldBegin('size', Thrift.Type.I32, 3);
    output.writeI32(this.size);
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 4);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 5);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_getPopularPackages_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.ProductList(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ShopService_getPopularPackages_result.prototype = {};
ShopService_getPopularPackages_result.prototype.read = function(input) {
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
        this.success = new ttypes.ProductList();
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

ShopService_getPopularPackages_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getPopularPackages_result');
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

var ShopService_getPresentsReceived_args = function(args) {
  this.start = null;
  this.size = null;
  this.language = null;
  this.country = null;
  if (args) {
    if (args.start !== undefined && args.start !== null) {
      this.start = args.start;
    }
    if (args.size !== undefined && args.size !== null) {
      this.size = args.size;
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
  }
};
ShopService_getPresentsReceived_args.prototype = {};
ShopService_getPresentsReceived_args.prototype.read = function(input) {
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
        this.start = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.size = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
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

ShopService_getPresentsReceived_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getPresentsReceived_args');
  if (this.start !== null && this.start !== undefined) {
    output.writeFieldBegin('start', Thrift.Type.I64, 2);
    output.writeI64(this.start);
    output.writeFieldEnd();
  }
  if (this.size !== null && this.size !== undefined) {
    output.writeFieldBegin('size', Thrift.Type.I32, 3);
    output.writeI32(this.size);
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 4);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 5);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_getPresentsReceived_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.ProductList(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ShopService_getPresentsReceived_result.prototype = {};
ShopService_getPresentsReceived_result.prototype.read = function(input) {
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
        this.success = new ttypes.ProductList();
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

ShopService_getPresentsReceived_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getPresentsReceived_result');
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

var ShopService_getPresentsSent_args = function(args) {
  this.start = null;
  this.size = null;
  this.language = null;
  this.country = null;
  if (args) {
    if (args.start !== undefined && args.start !== null) {
      this.start = args.start;
    }
    if (args.size !== undefined && args.size !== null) {
      this.size = args.size;
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
  }
};
ShopService_getPresentsSent_args.prototype = {};
ShopService_getPresentsSent_args.prototype.read = function(input) {
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
        this.start = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.size = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
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

ShopService_getPresentsSent_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getPresentsSent_args');
  if (this.start !== null && this.start !== undefined) {
    output.writeFieldBegin('start', Thrift.Type.I64, 2);
    output.writeI64(this.start);
    output.writeFieldEnd();
  }
  if (this.size !== null && this.size !== undefined) {
    output.writeFieldBegin('size', Thrift.Type.I32, 3);
    output.writeI32(this.size);
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 4);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 5);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_getPresentsSent_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.ProductList(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ShopService_getPresentsSent_result.prototype = {};
ShopService_getPresentsSent_result.prototype.read = function(input) {
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
        this.success = new ttypes.ProductList();
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

ShopService_getPresentsSent_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getPresentsSent_result');
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

var ShopService_getProduct_args = function(args) {
  this.packageID = null;
  this.language = null;
  this.country = null;
  if (args) {
    if (args.packageID !== undefined && args.packageID !== null) {
      this.packageID = args.packageID;
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
  }
};
ShopService_getProduct_args.prototype = {};
ShopService_getProduct_args.prototype.read = function(input) {
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
        this.packageID = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
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

ShopService_getProduct_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getProduct_args');
  if (this.packageID !== null && this.packageID !== undefined) {
    output.writeFieldBegin('packageID', Thrift.Type.I64, 2);
    output.writeI64(this.packageID);
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 3);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 4);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_getProduct_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Product(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ShopService_getProduct_result.prototype = {};
ShopService_getProduct_result.prototype.read = function(input) {
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
        this.success = new ttypes.Product();
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

ShopService_getProduct_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getProduct_result');
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

var ShopService_getProductList_args = function(args) {
  this.productIdList = null;
  this.language = null;
  this.country = null;
  if (args) {
    if (args.productIdList !== undefined && args.productIdList !== null) {
      this.productIdList = Thrift.copyList(args.productIdList, [null]);
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
  }
};
ShopService_getProductList_args.prototype = {};
ShopService_getProductList_args.prototype.read = function(input) {
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
        var _size784 = 0;
        var _rtmp3788;
        this.productIdList = [];
        var _etype787 = 0;
        _rtmp3788 = input.readListBegin();
        _etype787 = _rtmp3788.etype;
        _size784 = _rtmp3788.size;
        for (var _i789 = 0; _i789 < _size784; ++_i789)
        {
          var elem790 = null;
          elem790 = input.readString();
          this.productIdList.push(elem790);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
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

ShopService_getProductList_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getProductList_args');
  if (this.productIdList !== null && this.productIdList !== undefined) {
    output.writeFieldBegin('productIdList', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRING, this.productIdList.length);
    for (var iter791 in this.productIdList)
    {
      if (this.productIdList.hasOwnProperty(iter791))
      {
        iter791 = this.productIdList[iter791];
        output.writeString(iter791);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 3);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 4);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_getProductList_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.ProductList(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ShopService_getProductList_result.prototype = {};
ShopService_getProductList_result.prototype.read = function(input) {
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
        this.success = new ttypes.ProductList();
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

ShopService_getProductList_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getProductList_result');
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

var ShopService_getProductListWithCarrier_args = function(args) {
  this.productIdList = null;
  this.language = null;
  this.country = null;
  this.carrierCode = null;
  if (args) {
    if (args.productIdList !== undefined && args.productIdList !== null) {
      this.productIdList = Thrift.copyList(args.productIdList, [null]);
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
    if (args.carrierCode !== undefined && args.carrierCode !== null) {
      this.carrierCode = args.carrierCode;
    }
  }
};
ShopService_getProductListWithCarrier_args.prototype = {};
ShopService_getProductListWithCarrier_args.prototype.read = function(input) {
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
        var _size792 = 0;
        var _rtmp3796;
        this.productIdList = [];
        var _etype795 = 0;
        _rtmp3796 = input.readListBegin();
        _etype795 = _rtmp3796.etype;
        _size792 = _rtmp3796.size;
        for (var _i797 = 0; _i797 < _size792; ++_i797)
        {
          var elem798 = null;
          elem798 = input.readString();
          this.productIdList.push(elem798);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.carrierCode = input.readString();
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

ShopService_getProductListWithCarrier_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getProductListWithCarrier_args');
  if (this.productIdList !== null && this.productIdList !== undefined) {
    output.writeFieldBegin('productIdList', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRING, this.productIdList.length);
    for (var iter799 in this.productIdList)
    {
      if (this.productIdList.hasOwnProperty(iter799))
      {
        iter799 = this.productIdList[iter799];
        output.writeString(iter799);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 3);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 4);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  if (this.carrierCode !== null && this.carrierCode !== undefined) {
    output.writeFieldBegin('carrierCode', Thrift.Type.STRING, 5);
    output.writeString(this.carrierCode);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_getProductListWithCarrier_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.ProductList(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ShopService_getProductListWithCarrier_result.prototype = {};
ShopService_getProductListWithCarrier_result.prototype.read = function(input) {
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
        this.success = new ttypes.ProductList();
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

ShopService_getProductListWithCarrier_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getProductListWithCarrier_result');
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

var ShopService_getProductWithCarrier_args = function(args) {
  this.packageID = null;
  this.language = null;
  this.country = null;
  this.carrierCode = null;
  if (args) {
    if (args.packageID !== undefined && args.packageID !== null) {
      this.packageID = args.packageID;
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
    if (args.carrierCode !== undefined && args.carrierCode !== null) {
      this.carrierCode = args.carrierCode;
    }
  }
};
ShopService_getProductWithCarrier_args.prototype = {};
ShopService_getProductWithCarrier_args.prototype.read = function(input) {
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
        this.packageID = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.carrierCode = input.readString();
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

ShopService_getProductWithCarrier_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getProductWithCarrier_args');
  if (this.packageID !== null && this.packageID !== undefined) {
    output.writeFieldBegin('packageID', Thrift.Type.I64, 2);
    output.writeI64(this.packageID);
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 3);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 4);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  if (this.carrierCode !== null && this.carrierCode !== undefined) {
    output.writeFieldBegin('carrierCode', Thrift.Type.STRING, 5);
    output.writeString(this.carrierCode);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_getProductWithCarrier_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Product(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ShopService_getProductWithCarrier_result.prototype = {};
ShopService_getProductWithCarrier_result.prototype.read = function(input) {
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
        this.success = new ttypes.Product();
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

ShopService_getProductWithCarrier_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getProductWithCarrier_result');
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

var ShopService_getPurchaseHistory_args = function(args) {
  this.start = null;
  this.size = null;
  this.language = null;
  this.country = null;
  if (args) {
    if (args.start !== undefined && args.start !== null) {
      this.start = args.start;
    }
    if (args.size !== undefined && args.size !== null) {
      this.size = args.size;
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
  }
};
ShopService_getPurchaseHistory_args.prototype = {};
ShopService_getPurchaseHistory_args.prototype.read = function(input) {
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
        this.start = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.size = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
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

ShopService_getPurchaseHistory_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getPurchaseHistory_args');
  if (this.start !== null && this.start !== undefined) {
    output.writeFieldBegin('start', Thrift.Type.I64, 2);
    output.writeI64(this.start);
    output.writeFieldEnd();
  }
  if (this.size !== null && this.size !== undefined) {
    output.writeFieldBegin('size', Thrift.Type.I32, 3);
    output.writeI32(this.size);
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 4);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 5);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_getPurchaseHistory_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.ProductList(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ShopService_getPurchaseHistory_result.prototype = {};
ShopService_getPurchaseHistory_result.prototype.read = function(input) {
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
        this.success = new ttypes.ProductList();
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

ShopService_getPurchaseHistory_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getPurchaseHistory_result');
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

var ShopService_getTotalBalance_args = function(args) {
  this.appStoreCode = null;
  if (args) {
    if (args.appStoreCode !== undefined && args.appStoreCode !== null) {
      this.appStoreCode = args.appStoreCode;
    }
  }
};
ShopService_getTotalBalance_args.prototype = {};
ShopService_getTotalBalance_args.prototype.read = function(input) {
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
        this.appStoreCode = input.readI32();
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

ShopService_getTotalBalance_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getTotalBalance_args');
  if (this.appStoreCode !== null && this.appStoreCode !== undefined) {
    output.writeFieldBegin('appStoreCode', Thrift.Type.I32, 2);
    output.writeI32(this.appStoreCode);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_getTotalBalance_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Coin(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ShopService_getTotalBalance_result.prototype = {};
ShopService_getTotalBalance_result.prototype.read = function(input) {
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
        this.success = new ttypes.Coin();
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

ShopService_getTotalBalance_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_getTotalBalance_result');
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

var ShopService_notifyDownloaded_args = function(args) {
  this.packageId = null;
  this.language = null;
  if (args) {
    if (args.packageId !== undefined && args.packageId !== null) {
      this.packageId = args.packageId;
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
  }
};
ShopService_notifyDownloaded_args.prototype = {};
ShopService_notifyDownloaded_args.prototype.read = function(input) {
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
        this.packageId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
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

ShopService_notifyDownloaded_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_notifyDownloaded_args');
  if (this.packageId !== null && this.packageId !== undefined) {
    output.writeFieldBegin('packageId', Thrift.Type.I64, 2);
    output.writeI64(this.packageId);
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 3);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_notifyDownloaded_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ShopService_notifyDownloaded_result.prototype = {};
ShopService_notifyDownloaded_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I64) {
        this.success = input.readI64();
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

ShopService_notifyDownloaded_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_notifyDownloaded_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.I64, 0);
    output.writeI64(this.success);
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

var ShopService_reserveCoinPurchase_args = function(args) {
  this.request = null;
  if (args) {
    if (args.request !== undefined && args.request !== null) {
      this.request = new ttypes.CoinPurchaseReservation(args.request);
    }
  }
};
ShopService_reserveCoinPurchase_args.prototype = {};
ShopService_reserveCoinPurchase_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.request = new ttypes.CoinPurchaseReservation();
        this.request.read(input);
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

ShopService_reserveCoinPurchase_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_reserveCoinPurchase_args');
  if (this.request !== null && this.request !== undefined) {
    output.writeFieldBegin('request', Thrift.Type.STRUCT, 2);
    this.request.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_reserveCoinPurchase_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.PaymentReservationResult(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ShopService_reserveCoinPurchase_result.prototype = {};
ShopService_reserveCoinPurchase_result.prototype.read = function(input) {
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
        this.success = new ttypes.PaymentReservationResult();
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

ShopService_reserveCoinPurchase_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_reserveCoinPurchase_result');
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

var ShopService_reservePayment_args = function(args) {
  this.paymentReservation = null;
  if (args) {
    if (args.paymentReservation !== undefined && args.paymentReservation !== null) {
      this.paymentReservation = new ttypes.PaymentReservation(args.paymentReservation);
    }
  }
};
ShopService_reservePayment_args.prototype = {};
ShopService_reservePayment_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.paymentReservation = new ttypes.PaymentReservation();
        this.paymentReservation.read(input);
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

ShopService_reservePayment_args.prototype.write = function(output) {
  output.writeStructBegin('ShopService_reservePayment_args');
  if (this.paymentReservation !== null && this.paymentReservation !== undefined) {
    output.writeFieldBegin('paymentReservation', Thrift.Type.STRUCT, 2);
    this.paymentReservation.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopService_reservePayment_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof ttypes.TalkException) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.PaymentReservationResult(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
ShopService_reservePayment_result.prototype = {};
ShopService_reservePayment_result.prototype.read = function(input) {
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
        this.success = new ttypes.PaymentReservationResult();
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

ShopService_reservePayment_result.prototype.write = function(output) {
  output.writeStructBegin('ShopService_reservePayment_result');
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

var ShopServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
ShopServiceClient.prototype = {};
ShopServiceClient.prototype.seqid = function() { return this._seqid; };
ShopServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };
ShopServiceClient.prototype.buyCoinProduct = function(paymentReservation, callback) {
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
    this.send_buyCoinProduct(paymentReservation);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_buyCoinProduct(paymentReservation);
  }
};

ShopServiceClient.prototype.send_buyCoinProduct = function(paymentReservation) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('buyCoinProduct', Thrift.MessageType.CALL, this.seqid());
  var params = {
    paymentReservation: paymentReservation
  };
  var args = new ShopService_buyCoinProduct_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_buyCoinProduct = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_buyCoinProduct_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
ShopServiceClient.prototype.buyFreeProduct = function(receiverMid, productId, messageTemplate, language, country, packageId, callback) {
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
    this.send_buyFreeProduct(receiverMid, productId, messageTemplate, language, country, packageId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_buyFreeProduct(receiverMid, productId, messageTemplate, language, country, packageId);
  }
};

ShopServiceClient.prototype.send_buyFreeProduct = function(receiverMid, productId, messageTemplate, language, country, packageId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('buyFreeProduct', Thrift.MessageType.CALL, this.seqid());
  var params = {
    receiverMid: receiverMid,
    productId: productId,
    messageTemplate: messageTemplate,
    language: language,
    country: country,
    packageId: packageId
  };
  var args = new ShopService_buyFreeProduct_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_buyFreeProduct = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_buyFreeProduct_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
ShopServiceClient.prototype.buyMustbuyProduct = function(receiverMid, productId, messageTemplate, language, country, packageId, serialNumber, callback) {
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
    this.send_buyMustbuyProduct(receiverMid, productId, messageTemplate, language, country, packageId, serialNumber);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_buyMustbuyProduct(receiverMid, productId, messageTemplate, language, country, packageId, serialNumber);
  }
};

ShopServiceClient.prototype.send_buyMustbuyProduct = function(receiverMid, productId, messageTemplate, language, country, packageId, serialNumber) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('buyMustbuyProduct', Thrift.MessageType.CALL, this.seqid());
  var params = {
    receiverMid: receiverMid,
    productId: productId,
    messageTemplate: messageTemplate,
    language: language,
    country: country,
    packageId: packageId,
    serialNumber: serialNumber
  };
  var args = new ShopService_buyMustbuyProduct_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_buyMustbuyProduct = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_buyMustbuyProduct_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
ShopServiceClient.prototype.checkCanReceivePresent = function(recipientMid, packageId, language, country, callback) {
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
    this.send_checkCanReceivePresent(recipientMid, packageId, language, country);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_checkCanReceivePresent(recipientMid, packageId, language, country);
  }
};

ShopServiceClient.prototype.send_checkCanReceivePresent = function(recipientMid, packageId, language, country) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('checkCanReceivePresent', Thrift.MessageType.CALL, this.seqid());
  var params = {
    recipientMid: recipientMid,
    packageId: packageId,
    language: language,
    country: country
  };
  var args = new ShopService_checkCanReceivePresent_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_checkCanReceivePresent = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_checkCanReceivePresent_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null);
};
ShopServiceClient.prototype.getActivePurchases = function(start, size, language, country, callback) {
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
    this.send_getActivePurchases(start, size, language, country);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getActivePurchases(start, size, language, country);
  }
};

ShopServiceClient.prototype.send_getActivePurchases = function(start, size, language, country) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getActivePurchases', Thrift.MessageType.CALL, this.seqid());
  var params = {
    start: start,
    size: size,
    language: language,
    country: country
  };
  var args = new ShopService_getActivePurchases_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_getActivePurchases = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_getActivePurchases_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getActivePurchases failed: unknown result');
};
ShopServiceClient.prototype.getActivePurchaseVersions = function(start, size, language, country, callback) {
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
    this.send_getActivePurchaseVersions(start, size, language, country);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getActivePurchaseVersions(start, size, language, country);
  }
};

ShopServiceClient.prototype.send_getActivePurchaseVersions = function(start, size, language, country) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getActivePurchaseVersions', Thrift.MessageType.CALL, this.seqid());
  var params = {
    start: start,
    size: size,
    language: language,
    country: country
  };
  var args = new ShopService_getActivePurchaseVersions_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_getActivePurchaseVersions = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_getActivePurchaseVersions_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getActivePurchaseVersions failed: unknown result');
};
ShopServiceClient.prototype.getCoinProducts = function(appStoreCode, country, language, callback) {
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
    this.send_getCoinProducts(appStoreCode, country, language);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getCoinProducts(appStoreCode, country, language);
  }
};

ShopServiceClient.prototype.send_getCoinProducts = function(appStoreCode, country, language) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getCoinProducts', Thrift.MessageType.CALL, this.seqid());
  var params = {
    appStoreCode: appStoreCode,
    country: country,
    language: language
  };
  var args = new ShopService_getCoinProducts_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_getCoinProducts = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_getCoinProducts_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getCoinProducts failed: unknown result');
};
ShopServiceClient.prototype.getCoinProductsByPgCode = function(appStoreCode, pgCode, country, language, callback) {
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
    this.send_getCoinProductsByPgCode(appStoreCode, pgCode, country, language);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getCoinProductsByPgCode(appStoreCode, pgCode, country, language);
  }
};

ShopServiceClient.prototype.send_getCoinProductsByPgCode = function(appStoreCode, pgCode, country, language) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getCoinProductsByPgCode', Thrift.MessageType.CALL, this.seqid());
  var params = {
    appStoreCode: appStoreCode,
    pgCode: pgCode,
    country: country,
    language: language
  };
  var args = new ShopService_getCoinProductsByPgCode_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_getCoinProductsByPgCode = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_getCoinProductsByPgCode_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getCoinProductsByPgCode failed: unknown result');
};
ShopServiceClient.prototype.getCoinPurchaseHistory = function(request, callback) {
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
    this.send_getCoinPurchaseHistory(request);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getCoinPurchaseHistory(request);
  }
};

ShopServiceClient.prototype.send_getCoinPurchaseHistory = function(request) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getCoinPurchaseHistory', Thrift.MessageType.CALL, this.seqid());
  var params = {
    request: request
  };
  var args = new ShopService_getCoinPurchaseHistory_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_getCoinPurchaseHistory = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_getCoinPurchaseHistory_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getCoinPurchaseHistory failed: unknown result');
};
ShopServiceClient.prototype.getCoinUseAndRefundHistory = function(request, callback) {
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
    this.send_getCoinUseAndRefundHistory(request);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getCoinUseAndRefundHistory(request);
  }
};

ShopServiceClient.prototype.send_getCoinUseAndRefundHistory = function(request) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getCoinUseAndRefundHistory', Thrift.MessageType.CALL, this.seqid());
  var params = {
    request: request
  };
  var args = new ShopService_getCoinUseAndRefundHistory_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_getCoinUseAndRefundHistory = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_getCoinUseAndRefundHistory_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getCoinUseAndRefundHistory failed: unknown result');
};
ShopServiceClient.prototype.getDownloads = function(start, size, language, country, callback) {
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
    this.send_getDownloads(start, size, language, country);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getDownloads(start, size, language, country);
  }
};

ShopServiceClient.prototype.send_getDownloads = function(start, size, language, country) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getDownloads', Thrift.MessageType.CALL, this.seqid());
  var params = {
    start: start,
    size: size,
    language: language,
    country: country
  };
  var args = new ShopService_getDownloads_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_getDownloads = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_getDownloads_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getDownloads failed: unknown result');
};
ShopServiceClient.prototype.getEventPackages = function(start, size, language, country, callback) {
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
    this.send_getEventPackages(start, size, language, country);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getEventPackages(start, size, language, country);
  }
};

ShopServiceClient.prototype.send_getEventPackages = function(start, size, language, country) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getEventPackages', Thrift.MessageType.CALL, this.seqid());
  var params = {
    start: start,
    size: size,
    language: language,
    country: country
  };
  var args = new ShopService_getEventPackages_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_getEventPackages = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_getEventPackages_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getEventPackages failed: unknown result');
};
ShopServiceClient.prototype.getNewlyReleasedPackages = function(start, size, language, country, callback) {
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
    this.send_getNewlyReleasedPackages(start, size, language, country);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getNewlyReleasedPackages(start, size, language, country);
  }
};

ShopServiceClient.prototype.send_getNewlyReleasedPackages = function(start, size, language, country) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getNewlyReleasedPackages', Thrift.MessageType.CALL, this.seqid());
  var params = {
    start: start,
    size: size,
    language: language,
    country: country
  };
  var args = new ShopService_getNewlyReleasedPackages_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_getNewlyReleasedPackages = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_getNewlyReleasedPackages_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getNewlyReleasedPackages failed: unknown result');
};
ShopServiceClient.prototype.getPopularPackages = function(start, size, language, country, callback) {
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
    this.send_getPopularPackages(start, size, language, country);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getPopularPackages(start, size, language, country);
  }
};

ShopServiceClient.prototype.send_getPopularPackages = function(start, size, language, country) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getPopularPackages', Thrift.MessageType.CALL, this.seqid());
  var params = {
    start: start,
    size: size,
    language: language,
    country: country
  };
  var args = new ShopService_getPopularPackages_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_getPopularPackages = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_getPopularPackages_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getPopularPackages failed: unknown result');
};
ShopServiceClient.prototype.getPresentsReceived = function(start, size, language, country, callback) {
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
    this.send_getPresentsReceived(start, size, language, country);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getPresentsReceived(start, size, language, country);
  }
};

ShopServiceClient.prototype.send_getPresentsReceived = function(start, size, language, country) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getPresentsReceived', Thrift.MessageType.CALL, this.seqid());
  var params = {
    start: start,
    size: size,
    language: language,
    country: country
  };
  var args = new ShopService_getPresentsReceived_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_getPresentsReceived = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_getPresentsReceived_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getPresentsReceived failed: unknown result');
};
ShopServiceClient.prototype.getPresentsSent = function(start, size, language, country, callback) {
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
    this.send_getPresentsSent(start, size, language, country);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getPresentsSent(start, size, language, country);
  }
};

ShopServiceClient.prototype.send_getPresentsSent = function(start, size, language, country) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getPresentsSent', Thrift.MessageType.CALL, this.seqid());
  var params = {
    start: start,
    size: size,
    language: language,
    country: country
  };
  var args = new ShopService_getPresentsSent_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_getPresentsSent = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_getPresentsSent_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getPresentsSent failed: unknown result');
};
ShopServiceClient.prototype.getProduct = function(packageID, language, country, callback) {
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
    this.send_getProduct(packageID, language, country);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getProduct(packageID, language, country);
  }
};

ShopServiceClient.prototype.send_getProduct = function(packageID, language, country) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getProduct', Thrift.MessageType.CALL, this.seqid());
  var params = {
    packageID: packageID,
    language: language,
    country: country
  };
  var args = new ShopService_getProduct_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_getProduct = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_getProduct_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getProduct failed: unknown result');
};
ShopServiceClient.prototype.getProductList = function(productIdList, language, country, callback) {
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
    this.send_getProductList(productIdList, language, country);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getProductList(productIdList, language, country);
  }
};

ShopServiceClient.prototype.send_getProductList = function(productIdList, language, country) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getProductList', Thrift.MessageType.CALL, this.seqid());
  var params = {
    productIdList: productIdList,
    language: language,
    country: country
  };
  var args = new ShopService_getProductList_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_getProductList = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_getProductList_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getProductList failed: unknown result');
};
ShopServiceClient.prototype.getProductListWithCarrier = function(productIdList, language, country, carrierCode, callback) {
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
    this.send_getProductListWithCarrier(productIdList, language, country, carrierCode);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getProductListWithCarrier(productIdList, language, country, carrierCode);
  }
};

ShopServiceClient.prototype.send_getProductListWithCarrier = function(productIdList, language, country, carrierCode) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getProductListWithCarrier', Thrift.MessageType.CALL, this.seqid());
  var params = {
    productIdList: productIdList,
    language: language,
    country: country,
    carrierCode: carrierCode
  };
  var args = new ShopService_getProductListWithCarrier_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_getProductListWithCarrier = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_getProductListWithCarrier_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getProductListWithCarrier failed: unknown result');
};
ShopServiceClient.prototype.getProductWithCarrier = function(packageID, language, country, carrierCode, callback) {
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
    this.send_getProductWithCarrier(packageID, language, country, carrierCode);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getProductWithCarrier(packageID, language, country, carrierCode);
  }
};

ShopServiceClient.prototype.send_getProductWithCarrier = function(packageID, language, country, carrierCode) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getProductWithCarrier', Thrift.MessageType.CALL, this.seqid());
  var params = {
    packageID: packageID,
    language: language,
    country: country,
    carrierCode: carrierCode
  };
  var args = new ShopService_getProductWithCarrier_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_getProductWithCarrier = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_getProductWithCarrier_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getProductWithCarrier failed: unknown result');
};
ShopServiceClient.prototype.getPurchaseHistory = function(start, size, language, country, callback) {
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
    this.send_getPurchaseHistory(start, size, language, country);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getPurchaseHistory(start, size, language, country);
  }
};

ShopServiceClient.prototype.send_getPurchaseHistory = function(start, size, language, country) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getPurchaseHistory', Thrift.MessageType.CALL, this.seqid());
  var params = {
    start: start,
    size: size,
    language: language,
    country: country
  };
  var args = new ShopService_getPurchaseHistory_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_getPurchaseHistory = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_getPurchaseHistory_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getPurchaseHistory failed: unknown result');
};
ShopServiceClient.prototype.getTotalBalance = function(appStoreCode, callback) {
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
    this.send_getTotalBalance(appStoreCode);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getTotalBalance(appStoreCode);
  }
};

ShopServiceClient.prototype.send_getTotalBalance = function(appStoreCode) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getTotalBalance', Thrift.MessageType.CALL, this.seqid());
  var params = {
    appStoreCode: appStoreCode
  };
  var args = new ShopService_getTotalBalance_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_getTotalBalance = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_getTotalBalance_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getTotalBalance failed: unknown result');
};
ShopServiceClient.prototype.notifyDownloaded = function(packageId, language, callback) {
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
    this.send_notifyDownloaded(packageId, language);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_notifyDownloaded(packageId, language);
  }
};

ShopServiceClient.prototype.send_notifyDownloaded = function(packageId, language) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('notifyDownloaded', Thrift.MessageType.CALL, this.seqid());
  var params = {
    packageId: packageId,
    language: language
  };
  var args = new ShopService_notifyDownloaded_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_notifyDownloaded = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_notifyDownloaded_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('notifyDownloaded failed: unknown result');
};
ShopServiceClient.prototype.reserveCoinPurchase = function(request, callback) {
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
    this.send_reserveCoinPurchase(request);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_reserveCoinPurchase(request);
  }
};

ShopServiceClient.prototype.send_reserveCoinPurchase = function(request) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('reserveCoinPurchase', Thrift.MessageType.CALL, this.seqid());
  var params = {
    request: request
  };
  var args = new ShopService_reserveCoinPurchase_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_reserveCoinPurchase = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_reserveCoinPurchase_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('reserveCoinPurchase failed: unknown result');
};
ShopServiceClient.prototype.reservePayment = function(paymentReservation, callback) {
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
    this.send_reservePayment(paymentReservation);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_reservePayment(paymentReservation);
  }
};

ShopServiceClient.prototype.send_reservePayment = function(paymentReservation) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('reservePayment', Thrift.MessageType.CALL, this.seqid());
  var params = {
    paymentReservation: paymentReservation
  };
  var args = new ShopService_reservePayment_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ShopServiceClient.prototype.recv_reservePayment = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ShopService_reservePayment_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('reservePayment failed: unknown result');
};
var ShopServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
ShopServiceProcessor.prototype.process = function(input, output) {
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
ShopServiceProcessor.prototype.process_buyCoinProduct = function(seqid, input, output) {
  var args = new ShopService_buyCoinProduct_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.buyCoinProduct.length === 1) {
    Q.fcall(this._handler.buyCoinProduct.bind(this._handler), args.paymentReservation)
      .then(function(result) {
        var result_obj = new ShopService_buyCoinProduct_result({success: result});
        output.writeMessageBegin("buyCoinProduct", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_buyCoinProduct_result(err);
          output.writeMessageBegin("buyCoinProduct", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("buyCoinProduct", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.buyCoinProduct(args.paymentReservation, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_buyCoinProduct_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("buyCoinProduct", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("buyCoinProduct", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_buyFreeProduct = function(seqid, input, output) {
  var args = new ShopService_buyFreeProduct_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.buyFreeProduct.length === 6) {
    Q.fcall(this._handler.buyFreeProduct.bind(this._handler), args.receiverMid, args.productId, args.messageTemplate, args.language, args.country, args.packageId)
      .then(function(result) {
        var result_obj = new ShopService_buyFreeProduct_result({success: result});
        output.writeMessageBegin("buyFreeProduct", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_buyFreeProduct_result(err);
          output.writeMessageBegin("buyFreeProduct", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("buyFreeProduct", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.buyFreeProduct(args.receiverMid, args.productId, args.messageTemplate, args.language, args.country, args.packageId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_buyFreeProduct_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("buyFreeProduct", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("buyFreeProduct", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_buyMustbuyProduct = function(seqid, input, output) {
  var args = new ShopService_buyMustbuyProduct_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.buyMustbuyProduct.length === 7) {
    Q.fcall(this._handler.buyMustbuyProduct.bind(this._handler), args.receiverMid, args.productId, args.messageTemplate, args.language, args.country, args.packageId, args.serialNumber)
      .then(function(result) {
        var result_obj = new ShopService_buyMustbuyProduct_result({success: result});
        output.writeMessageBegin("buyMustbuyProduct", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_buyMustbuyProduct_result(err);
          output.writeMessageBegin("buyMustbuyProduct", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("buyMustbuyProduct", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.buyMustbuyProduct(args.receiverMid, args.productId, args.messageTemplate, args.language, args.country, args.packageId, args.serialNumber, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_buyMustbuyProduct_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("buyMustbuyProduct", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("buyMustbuyProduct", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_checkCanReceivePresent = function(seqid, input, output) {
  var args = new ShopService_checkCanReceivePresent_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.checkCanReceivePresent.length === 4) {
    Q.fcall(this._handler.checkCanReceivePresent.bind(this._handler), args.recipientMid, args.packageId, args.language, args.country)
      .then(function(result) {
        var result_obj = new ShopService_checkCanReceivePresent_result({success: result});
        output.writeMessageBegin("checkCanReceivePresent", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_checkCanReceivePresent_result(err);
          output.writeMessageBegin("checkCanReceivePresent", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("checkCanReceivePresent", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.checkCanReceivePresent(args.recipientMid, args.packageId, args.language, args.country, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_checkCanReceivePresent_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("checkCanReceivePresent", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("checkCanReceivePresent", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_getActivePurchases = function(seqid, input, output) {
  var args = new ShopService_getActivePurchases_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getActivePurchases.length === 4) {
    Q.fcall(this._handler.getActivePurchases.bind(this._handler), args.start, args.size, args.language, args.country)
      .then(function(result) {
        var result_obj = new ShopService_getActivePurchases_result({success: result});
        output.writeMessageBegin("getActivePurchases", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_getActivePurchases_result(err);
          output.writeMessageBegin("getActivePurchases", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getActivePurchases", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getActivePurchases(args.start, args.size, args.language, args.country, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_getActivePurchases_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getActivePurchases", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getActivePurchases", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_getActivePurchaseVersions = function(seqid, input, output) {
  var args = new ShopService_getActivePurchaseVersions_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getActivePurchaseVersions.length === 4) {
    Q.fcall(this._handler.getActivePurchaseVersions.bind(this._handler), args.start, args.size, args.language, args.country)
      .then(function(result) {
        var result_obj = new ShopService_getActivePurchaseVersions_result({success: result});
        output.writeMessageBegin("getActivePurchaseVersions", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_getActivePurchaseVersions_result(err);
          output.writeMessageBegin("getActivePurchaseVersions", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getActivePurchaseVersions", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getActivePurchaseVersions(args.start, args.size, args.language, args.country, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_getActivePurchaseVersions_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getActivePurchaseVersions", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getActivePurchaseVersions", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_getCoinProducts = function(seqid, input, output) {
  var args = new ShopService_getCoinProducts_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getCoinProducts.length === 3) {
    Q.fcall(this._handler.getCoinProducts.bind(this._handler), args.appStoreCode, args.country, args.language)
      .then(function(result) {
        var result_obj = new ShopService_getCoinProducts_result({success: result});
        output.writeMessageBegin("getCoinProducts", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_getCoinProducts_result(err);
          output.writeMessageBegin("getCoinProducts", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getCoinProducts", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getCoinProducts(args.appStoreCode, args.country, args.language, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_getCoinProducts_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getCoinProducts", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getCoinProducts", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_getCoinProductsByPgCode = function(seqid, input, output) {
  var args = new ShopService_getCoinProductsByPgCode_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getCoinProductsByPgCode.length === 4) {
    Q.fcall(this._handler.getCoinProductsByPgCode.bind(this._handler), args.appStoreCode, args.pgCode, args.country, args.language)
      .then(function(result) {
        var result_obj = new ShopService_getCoinProductsByPgCode_result({success: result});
        output.writeMessageBegin("getCoinProductsByPgCode", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_getCoinProductsByPgCode_result(err);
          output.writeMessageBegin("getCoinProductsByPgCode", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getCoinProductsByPgCode", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getCoinProductsByPgCode(args.appStoreCode, args.pgCode, args.country, args.language, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_getCoinProductsByPgCode_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getCoinProductsByPgCode", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getCoinProductsByPgCode", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_getCoinPurchaseHistory = function(seqid, input, output) {
  var args = new ShopService_getCoinPurchaseHistory_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getCoinPurchaseHistory.length === 1) {
    Q.fcall(this._handler.getCoinPurchaseHistory.bind(this._handler), args.request)
      .then(function(result) {
        var result_obj = new ShopService_getCoinPurchaseHistory_result({success: result});
        output.writeMessageBegin("getCoinPurchaseHistory", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_getCoinPurchaseHistory_result(err);
          output.writeMessageBegin("getCoinPurchaseHistory", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getCoinPurchaseHistory", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getCoinPurchaseHistory(args.request, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_getCoinPurchaseHistory_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getCoinPurchaseHistory", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getCoinPurchaseHistory", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_getCoinUseAndRefundHistory = function(seqid, input, output) {
  var args = new ShopService_getCoinUseAndRefundHistory_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getCoinUseAndRefundHistory.length === 1) {
    Q.fcall(this._handler.getCoinUseAndRefundHistory.bind(this._handler), args.request)
      .then(function(result) {
        var result_obj = new ShopService_getCoinUseAndRefundHistory_result({success: result});
        output.writeMessageBegin("getCoinUseAndRefundHistory", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_getCoinUseAndRefundHistory_result(err);
          output.writeMessageBegin("getCoinUseAndRefundHistory", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getCoinUseAndRefundHistory", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getCoinUseAndRefundHistory(args.request, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_getCoinUseAndRefundHistory_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getCoinUseAndRefundHistory", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getCoinUseAndRefundHistory", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_getDownloads = function(seqid, input, output) {
  var args = new ShopService_getDownloads_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getDownloads.length === 4) {
    Q.fcall(this._handler.getDownloads.bind(this._handler), args.start, args.size, args.language, args.country)
      .then(function(result) {
        var result_obj = new ShopService_getDownloads_result({success: result});
        output.writeMessageBegin("getDownloads", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_getDownloads_result(err);
          output.writeMessageBegin("getDownloads", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getDownloads", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getDownloads(args.start, args.size, args.language, args.country, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_getDownloads_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getDownloads", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getDownloads", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_getEventPackages = function(seqid, input, output) {
  var args = new ShopService_getEventPackages_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getEventPackages.length === 4) {
    Q.fcall(this._handler.getEventPackages.bind(this._handler), args.start, args.size, args.language, args.country)
      .then(function(result) {
        var result_obj = new ShopService_getEventPackages_result({success: result});
        output.writeMessageBegin("getEventPackages", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_getEventPackages_result(err);
          output.writeMessageBegin("getEventPackages", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getEventPackages", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getEventPackages(args.start, args.size, args.language, args.country, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_getEventPackages_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getEventPackages", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getEventPackages", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_getNewlyReleasedPackages = function(seqid, input, output) {
  var args = new ShopService_getNewlyReleasedPackages_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getNewlyReleasedPackages.length === 4) {
    Q.fcall(this._handler.getNewlyReleasedPackages.bind(this._handler), args.start, args.size, args.language, args.country)
      .then(function(result) {
        var result_obj = new ShopService_getNewlyReleasedPackages_result({success: result});
        output.writeMessageBegin("getNewlyReleasedPackages", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_getNewlyReleasedPackages_result(err);
          output.writeMessageBegin("getNewlyReleasedPackages", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getNewlyReleasedPackages", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getNewlyReleasedPackages(args.start, args.size, args.language, args.country, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_getNewlyReleasedPackages_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getNewlyReleasedPackages", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getNewlyReleasedPackages", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_getPopularPackages = function(seqid, input, output) {
  var args = new ShopService_getPopularPackages_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getPopularPackages.length === 4) {
    Q.fcall(this._handler.getPopularPackages.bind(this._handler), args.start, args.size, args.language, args.country)
      .then(function(result) {
        var result_obj = new ShopService_getPopularPackages_result({success: result});
        output.writeMessageBegin("getPopularPackages", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_getPopularPackages_result(err);
          output.writeMessageBegin("getPopularPackages", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getPopularPackages", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getPopularPackages(args.start, args.size, args.language, args.country, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_getPopularPackages_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getPopularPackages", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getPopularPackages", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_getPresentsReceived = function(seqid, input, output) {
  var args = new ShopService_getPresentsReceived_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getPresentsReceived.length === 4) {
    Q.fcall(this._handler.getPresentsReceived.bind(this._handler), args.start, args.size, args.language, args.country)
      .then(function(result) {
        var result_obj = new ShopService_getPresentsReceived_result({success: result});
        output.writeMessageBegin("getPresentsReceived", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_getPresentsReceived_result(err);
          output.writeMessageBegin("getPresentsReceived", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getPresentsReceived", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getPresentsReceived(args.start, args.size, args.language, args.country, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_getPresentsReceived_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getPresentsReceived", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getPresentsReceived", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_getPresentsSent = function(seqid, input, output) {
  var args = new ShopService_getPresentsSent_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getPresentsSent.length === 4) {
    Q.fcall(this._handler.getPresentsSent.bind(this._handler), args.start, args.size, args.language, args.country)
      .then(function(result) {
        var result_obj = new ShopService_getPresentsSent_result({success: result});
        output.writeMessageBegin("getPresentsSent", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_getPresentsSent_result(err);
          output.writeMessageBegin("getPresentsSent", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getPresentsSent", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getPresentsSent(args.start, args.size, args.language, args.country, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_getPresentsSent_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getPresentsSent", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getPresentsSent", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_getProduct = function(seqid, input, output) {
  var args = new ShopService_getProduct_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getProduct.length === 3) {
    Q.fcall(this._handler.getProduct.bind(this._handler), args.packageID, args.language, args.country)
      .then(function(result) {
        var result_obj = new ShopService_getProduct_result({success: result});
        output.writeMessageBegin("getProduct", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_getProduct_result(err);
          output.writeMessageBegin("getProduct", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getProduct", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getProduct(args.packageID, args.language, args.country, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_getProduct_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getProduct", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getProduct", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_getProductList = function(seqid, input, output) {
  var args = new ShopService_getProductList_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getProductList.length === 3) {
    Q.fcall(this._handler.getProductList.bind(this._handler), args.productIdList, args.language, args.country)
      .then(function(result) {
        var result_obj = new ShopService_getProductList_result({success: result});
        output.writeMessageBegin("getProductList", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_getProductList_result(err);
          output.writeMessageBegin("getProductList", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getProductList", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getProductList(args.productIdList, args.language, args.country, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_getProductList_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getProductList", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getProductList", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_getProductListWithCarrier = function(seqid, input, output) {
  var args = new ShopService_getProductListWithCarrier_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getProductListWithCarrier.length === 4) {
    Q.fcall(this._handler.getProductListWithCarrier.bind(this._handler), args.productIdList, args.language, args.country, args.carrierCode)
      .then(function(result) {
        var result_obj = new ShopService_getProductListWithCarrier_result({success: result});
        output.writeMessageBegin("getProductListWithCarrier", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_getProductListWithCarrier_result(err);
          output.writeMessageBegin("getProductListWithCarrier", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getProductListWithCarrier", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getProductListWithCarrier(args.productIdList, args.language, args.country, args.carrierCode, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_getProductListWithCarrier_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getProductListWithCarrier", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getProductListWithCarrier", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_getProductWithCarrier = function(seqid, input, output) {
  var args = new ShopService_getProductWithCarrier_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getProductWithCarrier.length === 4) {
    Q.fcall(this._handler.getProductWithCarrier.bind(this._handler), args.packageID, args.language, args.country, args.carrierCode)
      .then(function(result) {
        var result_obj = new ShopService_getProductWithCarrier_result({success: result});
        output.writeMessageBegin("getProductWithCarrier", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_getProductWithCarrier_result(err);
          output.writeMessageBegin("getProductWithCarrier", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getProductWithCarrier", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getProductWithCarrier(args.packageID, args.language, args.country, args.carrierCode, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_getProductWithCarrier_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getProductWithCarrier", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getProductWithCarrier", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_getPurchaseHistory = function(seqid, input, output) {
  var args = new ShopService_getPurchaseHistory_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getPurchaseHistory.length === 4) {
    Q.fcall(this._handler.getPurchaseHistory.bind(this._handler), args.start, args.size, args.language, args.country)
      .then(function(result) {
        var result_obj = new ShopService_getPurchaseHistory_result({success: result});
        output.writeMessageBegin("getPurchaseHistory", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_getPurchaseHistory_result(err);
          output.writeMessageBegin("getPurchaseHistory", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getPurchaseHistory", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getPurchaseHistory(args.start, args.size, args.language, args.country, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_getPurchaseHistory_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getPurchaseHistory", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getPurchaseHistory", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_getTotalBalance = function(seqid, input, output) {
  var args = new ShopService_getTotalBalance_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getTotalBalance.length === 1) {
    Q.fcall(this._handler.getTotalBalance.bind(this._handler), args.appStoreCode)
      .then(function(result) {
        var result_obj = new ShopService_getTotalBalance_result({success: result});
        output.writeMessageBegin("getTotalBalance", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_getTotalBalance_result(err);
          output.writeMessageBegin("getTotalBalance", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getTotalBalance", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getTotalBalance(args.appStoreCode, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_getTotalBalance_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getTotalBalance", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getTotalBalance", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_notifyDownloaded = function(seqid, input, output) {
  var args = new ShopService_notifyDownloaded_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.notifyDownloaded.length === 2) {
    Q.fcall(this._handler.notifyDownloaded.bind(this._handler), args.packageId, args.language)
      .then(function(result) {
        var result_obj = new ShopService_notifyDownloaded_result({success: result});
        output.writeMessageBegin("notifyDownloaded", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_notifyDownloaded_result(err);
          output.writeMessageBegin("notifyDownloaded", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("notifyDownloaded", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.notifyDownloaded(args.packageId, args.language, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_notifyDownloaded_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("notifyDownloaded", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("notifyDownloaded", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_reserveCoinPurchase = function(seqid, input, output) {
  var args = new ShopService_reserveCoinPurchase_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.reserveCoinPurchase.length === 1) {
    Q.fcall(this._handler.reserveCoinPurchase.bind(this._handler), args.request)
      .then(function(result) {
        var result_obj = new ShopService_reserveCoinPurchase_result({success: result});
        output.writeMessageBegin("reserveCoinPurchase", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_reserveCoinPurchase_result(err);
          output.writeMessageBegin("reserveCoinPurchase", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("reserveCoinPurchase", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.reserveCoinPurchase(args.request, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_reserveCoinPurchase_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("reserveCoinPurchase", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("reserveCoinPurchase", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ShopServiceProcessor.prototype.process_reservePayment = function(seqid, input, output) {
  var args = new ShopService_reservePayment_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.reservePayment.length === 1) {
    Q.fcall(this._handler.reservePayment.bind(this._handler), args.paymentReservation)
      .then(function(result) {
        var result_obj = new ShopService_reservePayment_result({success: result});
        output.writeMessageBegin("reservePayment", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.TalkException) {
          result = new ShopService_reservePayment_result(err);
          output.writeMessageBegin("reservePayment", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("reservePayment", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.reservePayment(args.paymentReservation, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.TalkException) {
        result_obj = new ShopService_reservePayment_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("reservePayment", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("reservePayment", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
