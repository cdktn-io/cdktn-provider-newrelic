# `dataNewrelicApiAccessKey` Submodule <a name="`dataNewrelicApiAccessKey` Submodule" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicApiAccessKey <a name="DataNewrelicApiAccessKey" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/data-sources/api_access_key newrelic_api_access_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_api_access_key.DataNewrelicApiAccessKey;

DataNewrelicApiAccessKey.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .keyType(java.lang.String)
//  .accountId(java.lang.Number)
//  .id(java.lang.String)
//  .ingestType(java.lang.String)
//  .keyId(java.lang.String)
//  .name(java.lang.String)
//  .userId(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.keyType">keyType</a></code> | <code>java.lang.String</code> | The type of the key, one of INGEST or USER. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID the key belongs to. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/data-sources/api_access_key#id DataNewrelicApiAccessKey#id}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.ingestType">ingestType</a></code> | <code>java.lang.String</code> | The type of the ingest key, one of LICENSE or BROWSER. Only applies when `key_type` is INGEST. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.keyId">keyId</a></code> | <code>java.lang.String</code> | The ID of the key. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the key. Used to narrow down the search when `key_id` is not specified. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.userId">userId</a></code> | <code>java.lang.Number</code> | The ID of the user that owns the key. Only applies when `key_type` is USER. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.keyType"></a>

- *Type:* java.lang.String

The type of the key, one of INGEST or USER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/data-sources/api_access_key#key_type DataNewrelicApiAccessKey#key_type}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

The New Relic account ID the key belongs to.

Defaults to the account ID configured on the provider when not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/data-sources/api_access_key#account_id DataNewrelicApiAccessKey#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/data-sources/api_access_key#id DataNewrelicApiAccessKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingestType`<sup>Optional</sup> <a name="ingestType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.ingestType"></a>

- *Type:* java.lang.String

The type of the ingest key, one of LICENSE or BROWSER. Only applies when `key_type` is INGEST.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/data-sources/api_access_key#ingest_type DataNewrelicApiAccessKey#ingest_type}

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.keyId"></a>

- *Type:* java.lang.String

The ID of the key.

When specified, the key is fetched directly by its ID instead of searching by other attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/data-sources/api_access_key#key_id DataNewrelicApiAccessKey#key_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the key. Used to narrow down the search when `key_id` is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/data-sources/api_access_key#name DataNewrelicApiAccessKey#name}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.userId"></a>

- *Type:* java.lang.Number

The ID of the user that owns the key. Only applies when `key_type` is USER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/data-sources/api_access_key#user_id DataNewrelicApiAccessKey#user_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetIngestType">resetIngestType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetId"></a>

```java
public void resetId()
```

##### `resetIngestType` <a name="resetIngestType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetIngestType"></a>

```java
public void resetIngestType()
```

##### `resetKeyId` <a name="resetKeyId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetKeyId"></a>

```java
public void resetKeyId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetName"></a>

```java
public void resetName()
```

##### `resetUserId` <a name="resetUserId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetUserId"></a>

```java
public void resetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataNewrelicApiAccessKey resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isConstruct"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_api_access_key.DataNewrelicApiAccessKey;

DataNewrelicApiAccessKey.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformElement"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_api_access_key.DataNewrelicApiAccessKey;

DataNewrelicApiAccessKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformDataSource"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_api_access_key.DataNewrelicApiAccessKey;

DataNewrelicApiAccessKey.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_api_access_key.DataNewrelicApiAccessKey;

DataNewrelicApiAccessKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataNewrelicApiAccessKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataNewrelicApiAccessKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataNewrelicApiAccessKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataNewrelicApiAccessKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/data-sources/api_access_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataNewrelicApiAccessKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.notes">notes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.ingestTypeInput">ingestTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyTypeInput">keyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.userIdInput">userIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.ingestType">ingestType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.userId">userId</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingestTypeInput`<sup>Optional</sup> <a name="ingestTypeInput" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.ingestTypeInput"></a>

```java
public java.lang.String getIngestTypeInput();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyTypeInput"></a>

```java
public java.lang.String getKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.userIdInput"></a>

```java
public java.lang.Number getUserIdInput();
```

- *Type:* java.lang.Number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ingestType`<sup>Required</sup> <a name="ingestType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.ingestType"></a>

```java
public java.lang.String getIngestType();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicApiAccessKeyConfig <a name="DataNewrelicApiAccessKeyConfig" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_api_access_key.DataNewrelicApiAccessKeyConfig;

DataNewrelicApiAccessKeyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .keyType(java.lang.String)
//  .accountId(java.lang.Number)
//  .id(java.lang.String)
//  .ingestType(java.lang.String)
//  .keyId(java.lang.String)
//  .name(java.lang.String)
//  .userId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.keyType">keyType</a></code> | <code>java.lang.String</code> | The type of the key, one of INGEST or USER. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID the key belongs to. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/data-sources/api_access_key#id DataNewrelicApiAccessKey#id}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.ingestType">ingestType</a></code> | <code>java.lang.String</code> | The type of the ingest key, one of LICENSE or BROWSER. Only applies when `key_type` is INGEST. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.keyId">keyId</a></code> | <code>java.lang.String</code> | The ID of the key. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the key. Used to narrow down the search when `key_id` is not specified. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.userId">userId</a></code> | <code>java.lang.Number</code> | The ID of the user that owns the key. Only applies when `key_type` is USER. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

The type of the key, one of INGEST or USER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/data-sources/api_access_key#key_type DataNewrelicApiAccessKey#key_type}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

The New Relic account ID the key belongs to.

Defaults to the account ID configured on the provider when not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/data-sources/api_access_key#account_id DataNewrelicApiAccessKey#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/data-sources/api_access_key#id DataNewrelicApiAccessKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingestType`<sup>Optional</sup> <a name="ingestType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.ingestType"></a>

```java
public java.lang.String getIngestType();
```

- *Type:* java.lang.String

The type of the ingest key, one of LICENSE or BROWSER. Only applies when `key_type` is INGEST.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/data-sources/api_access_key#ingest_type DataNewrelicApiAccessKey#ingest_type}

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

The ID of the key.

When specified, the key is fetched directly by its ID instead of searching by other attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/data-sources/api_access_key#key_id DataNewrelicApiAccessKey#key_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the key. Used to narrow down the search when `key_id` is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/data-sources/api_access_key#name DataNewrelicApiAccessKey#name}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

The ID of the user that owns the key. Only applies when `key_type` is USER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.2/docs/data-sources/api_access_key#user_id DataNewrelicApiAccessKey#user_id}

---



