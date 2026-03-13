/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NotificationDestinationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The account ID under which to put the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#account_id NotificationDestination#account_id}
  */
  readonly accountId?: number;
  /**
  * Indicates whether the destination is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#active NotificationDestination#active}
  */
  readonly active?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#id NotificationDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Required) The name of the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#name NotificationDestination#name}
  */
  readonly name: string;
  /**
  * (Required) The type of the destination. One of: (WEBHOOK, EMAIL, SERVICE_NOW, SERVICE_NOW_APP, PAGERDUTY_ACCOUNT_INTEGRATION, PAGERDUTY_SERVICE_INTEGRATION, JIRA, SLACK, SLACK_COLLABORATION, SLACK_LEGACY, MOBILE_PUSH, EVENT_BRIDGE, MICROSOFT_TEAMS, WORKFLOW_AUTOMATION).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#type NotificationDestination#type}
  */
  readonly type: string;
  /**
  * auth_basic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#auth_basic NotificationDestination#auth_basic}
  */
  readonly authBasic?: NotificationDestinationAuthBasic;
  /**
  * auth_custom_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#auth_custom_header NotificationDestination#auth_custom_header}
  */
  readonly authCustomHeader?: NotificationDestinationAuthCustomHeader[] | cdktn.IResolvable;
  /**
  * auth_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#auth_token NotificationDestination#auth_token}
  */
  readonly authToken?: NotificationDestinationAuthToken;
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#property NotificationDestination#property}
  */
  readonly property: NotificationDestinationProperty[] | cdktn.IResolvable;
  /**
  * secure_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#secure_url NotificationDestination#secure_url}
  */
  readonly secureUrl?: NotificationDestinationSecureUrl;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#timeouts NotificationDestination#timeouts}
  */
  readonly timeouts?: NotificationDestinationTimeouts;
}
export interface NotificationDestinationAuthBasic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#password NotificationDestination#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#user NotificationDestination#user}
  */
  readonly user: string;
}

export function notificationDestinationAuthBasicToTerraform(struct?: NotificationDestinationAuthBasicOutputReference | NotificationDestinationAuthBasic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    user: cdktn.stringToTerraform(struct!.user),
  }
}


export function notificationDestinationAuthBasicToHclTerraform(struct?: NotificationDestinationAuthBasicOutputReference | NotificationDestinationAuthBasic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktn.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationDestinationAuthBasicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationDestinationAuthBasic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationDestinationAuthBasic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._user = value.user;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface NotificationDestinationAuthCustomHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#key NotificationDestination#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#value NotificationDestination#value}
  */
  readonly value: string;
}

export function notificationDestinationAuthCustomHeaderToTerraform(struct?: NotificationDestinationAuthCustomHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function notificationDestinationAuthCustomHeaderToHclTerraform(struct?: NotificationDestinationAuthCustomHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationDestinationAuthCustomHeaderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NotificationDestinationAuthCustomHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationDestinationAuthCustomHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NotificationDestinationAuthCustomHeaderList extends cdktn.ComplexList {
  public internalValue? : NotificationDestinationAuthCustomHeader[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NotificationDestinationAuthCustomHeaderOutputReference {
    return new NotificationDestinationAuthCustomHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationDestinationAuthToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#prefix NotificationDestination#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#token NotificationDestination#token}
  */
  readonly token: string;
}

export function notificationDestinationAuthTokenToTerraform(struct?: NotificationDestinationAuthTokenOutputReference | NotificationDestinationAuthToken): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktn.stringToTerraform(struct!.prefix),
    token: cdktn.stringToTerraform(struct!.token),
  }
}


export function notificationDestinationAuthTokenToHclTerraform(struct?: NotificationDestinationAuthTokenOutputReference | NotificationDestinationAuthToken): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktn.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationDestinationAuthTokenOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationDestinationAuthToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationDestinationAuthToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefix = undefined;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefix = value.prefix;
      this._token = value.token;
    }
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface NotificationDestinationProperty {
  /**
  * Notification property display key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#display_value NotificationDestination#display_value}
  */
  readonly displayValue?: string;
  /**
  * Notification property key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#key NotificationDestination#key}
  */
  readonly key: string;
  /**
  * Notification property label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#label NotificationDestination#label}
  */
  readonly label?: string;
  /**
  * Notification property value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#value NotificationDestination#value}
  */
  readonly value: string;
}

export function notificationDestinationPropertyToTerraform(struct?: NotificationDestinationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_value: cdktn.stringToTerraform(struct!.displayValue),
    key: cdktn.stringToTerraform(struct!.key),
    label: cdktn.stringToTerraform(struct!.label),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function notificationDestinationPropertyToHclTerraform(struct?: NotificationDestinationProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_value: {
      value: cdktn.stringToHclTerraform(struct!.displayValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationDestinationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NotificationDestinationProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayValue = this._displayValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationDestinationProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayValue = undefined;
      this._key = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayValue = value.displayValue;
      this._key = value.key;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // display_value - computed: false, optional: true, required: false
  private _displayValue?: string; 
  public get displayValue() {
    return this.getStringAttribute('display_value');
  }
  public set displayValue(value: string) {
    this._displayValue = value;
  }
  public resetDisplayValue() {
    this._displayValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayValueInput() {
    return this._displayValue;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NotificationDestinationPropertyList extends cdktn.ComplexList {
  public internalValue? : NotificationDestinationProperty[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NotificationDestinationPropertyOutputReference {
    return new NotificationDestinationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationDestinationSecureUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#prefix NotificationDestination#prefix}
  */
  readonly prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#secure_suffix NotificationDestination#secure_suffix}
  */
  readonly secureSuffix: string;
}

export function notificationDestinationSecureUrlToTerraform(struct?: NotificationDestinationSecureUrlOutputReference | NotificationDestinationSecureUrl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktn.stringToTerraform(struct!.prefix),
    secure_suffix: cdktn.stringToTerraform(struct!.secureSuffix),
  }
}


export function notificationDestinationSecureUrlToHclTerraform(struct?: NotificationDestinationSecureUrlOutputReference | NotificationDestinationSecureUrl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure_suffix: {
      value: cdktn.stringToHclTerraform(struct!.secureSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationDestinationSecureUrlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationDestinationSecureUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._secureSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureSuffix = this._secureSuffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationDestinationSecureUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefix = undefined;
      this._secureSuffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefix = value.prefix;
      this._secureSuffix = value.secureSuffix;
    }
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // secure_suffix - computed: false, optional: false, required: true
  private _secureSuffix?: string; 
  public get secureSuffix() {
    return this.getStringAttribute('secure_suffix');
  }
  public set secureSuffix(value: string) {
    this._secureSuffix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secureSuffixInput() {
    return this._secureSuffix;
  }
}
export interface NotificationDestinationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#create NotificationDestination#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#update NotificationDestination#update}
  */
  readonly update?: string;
}

export function notificationDestinationTimeoutsToTerraform(struct?: NotificationDestinationTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function notificationDestinationTimeoutsToHclTerraform(struct?: NotificationDestinationTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationDestinationTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationDestinationTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationDestinationTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination newrelic_notification_destination}
*/
export class NotificationDestination extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_notification_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NotificationDestination resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationDestination to import
  * @param importFromId The id of the existing NotificationDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "newrelic_notification_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.3/docs/resources/notification_destination newrelic_notification_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_notification_destination',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '3.80.3',
        providerVersionConstraint: '~> 3.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._active = config.active;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._authBasic.internalValue = config.authBasic;
    this._authCustomHeader.internalValue = config.authCustomHeader;
    this._authToken.internalValue = config.authToken;
    this._property.internalValue = config.property;
    this._secureUrl.internalValue = config.secureUrl;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: number; 
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }
  public set accountId(value: number) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktn.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktn.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_sent - computed: true, optional: false, required: false
  public get lastSent() {
    return this.getStringAttribute('last_sent');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // auth_basic - computed: false, optional: true, required: false
  private _authBasic = new NotificationDestinationAuthBasicOutputReference(this, "auth_basic");
  public get authBasic() {
    return this._authBasic;
  }
  public putAuthBasic(value: NotificationDestinationAuthBasic) {
    this._authBasic.internalValue = value;
  }
  public resetAuthBasic() {
    this._authBasic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authBasicInput() {
    return this._authBasic.internalValue;
  }

  // auth_custom_header - computed: false, optional: true, required: false
  private _authCustomHeader = new NotificationDestinationAuthCustomHeaderList(this, "auth_custom_header", false);
  public get authCustomHeader() {
    return this._authCustomHeader;
  }
  public putAuthCustomHeader(value: NotificationDestinationAuthCustomHeader[] | cdktn.IResolvable) {
    this._authCustomHeader.internalValue = value;
  }
  public resetAuthCustomHeader() {
    this._authCustomHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCustomHeaderInput() {
    return this._authCustomHeader.internalValue;
  }

  // auth_token - computed: false, optional: true, required: false
  private _authToken = new NotificationDestinationAuthTokenOutputReference(this, "auth_token");
  public get authToken() {
    return this._authToken;
  }
  public putAuthToken(value: NotificationDestinationAuthToken) {
    this._authToken.internalValue = value;
  }
  public resetAuthToken() {
    this._authToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken.internalValue;
  }

  // property - computed: false, optional: false, required: true
  private _property = new NotificationDestinationPropertyList(this, "property", true);
  public get property() {
    return this._property;
  }
  public putProperty(value: NotificationDestinationProperty[] | cdktn.IResolvable) {
    this._property.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }

  // secure_url - computed: false, optional: true, required: false
  private _secureUrl = new NotificationDestinationSecureUrlOutputReference(this, "secure_url");
  public get secureUrl() {
    return this._secureUrl;
  }
  public putSecureUrl(value: NotificationDestinationSecureUrl) {
    this._secureUrl.internalValue = value;
  }
  public resetSecureUrl() {
    this._secureUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureUrlInput() {
    return this._secureUrl.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NotificationDestinationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NotificationDestinationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.numberToTerraform(this._accountId),
      active: cdktn.booleanToTerraform(this._active),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      type: cdktn.stringToTerraform(this._type),
      auth_basic: notificationDestinationAuthBasicToTerraform(this._authBasic.internalValue),
      auth_custom_header: cdktn.listMapper(notificationDestinationAuthCustomHeaderToTerraform, true)(this._authCustomHeader.internalValue),
      auth_token: notificationDestinationAuthTokenToTerraform(this._authToken.internalValue),
      property: cdktn.listMapper(notificationDestinationPropertyToTerraform, true)(this._property.internalValue),
      secure_url: notificationDestinationSecureUrlToTerraform(this._secureUrl.internalValue),
      timeouts: notificationDestinationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktn.numberToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      active: {
        value: cdktn.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_basic: {
        value: notificationDestinationAuthBasicToHclTerraform(this._authBasic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationDestinationAuthBasicList",
      },
      auth_custom_header: {
        value: cdktn.listMapperHcl(notificationDestinationAuthCustomHeaderToHclTerraform, true)(this._authCustomHeader.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationDestinationAuthCustomHeaderList",
      },
      auth_token: {
        value: notificationDestinationAuthTokenToHclTerraform(this._authToken.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationDestinationAuthTokenList",
      },
      property: {
        value: cdktn.listMapperHcl(notificationDestinationPropertyToHclTerraform, true)(this._property.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NotificationDestinationPropertyList",
      },
      secure_url: {
        value: notificationDestinationSecureUrlToHclTerraform(this._secureUrl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationDestinationSecureUrlList",
      },
      timeouts: {
        value: notificationDestinationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationDestinationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
