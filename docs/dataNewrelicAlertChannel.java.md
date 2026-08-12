# `dataNewrelicAlertChannel` Submodule <a name="`dataNewrelicAlertChannel` Submodule" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicAlertChannel <a name="DataNewrelicAlertChannel" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/alert_channel newrelic_alert_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_alert_channel.DataNewrelicAlertChannel;

DataNewrelicAlertChannel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .accountId(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the alert channel in New Relic. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID where you want to retrieve the alert channel. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/alert_channel#id DataNewrelicAlertChannel#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the alert channel in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/alert_channel#name DataNewrelicAlertChannel#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

The New Relic account ID where you want to retrieve the alert channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/alert_channel#account_id DataNewrelicAlertChannel#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/alert_channel#id DataNewrelicAlertChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataNewrelicAlertChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.isConstruct"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_alert_channel.DataNewrelicAlertChannel;

DataNewrelicAlertChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.isTerraformElement"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_alert_channel.DataNewrelicAlertChannel;

DataNewrelicAlertChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.isTerraformDataSource"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_alert_channel.DataNewrelicAlertChannel;

DataNewrelicAlertChannel.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.generateConfigForImport"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_alert_channel.DataNewrelicAlertChannel;

DataNewrelicAlertChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataNewrelicAlertChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataNewrelicAlertChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataNewrelicAlertChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataNewrelicAlertChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/alert_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataNewrelicAlertChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList">DataNewrelicAlertChannelConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.policyIds">policyIds</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.config"></a>

```java
public DataNewrelicAlertChannelConfigAList getConfig();
```

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList">DataNewrelicAlertChannelConfigAList</a>

---

##### `policyIds`<sup>Required</sup> <a name="policyIds" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.policyIds"></a>

```java
public java.util.List<java.lang.Number> getPolicyIds();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicAlertChannelConfig <a name="DataNewrelicAlertChannelConfig" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.Initializer"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_alert_channel.DataNewrelicAlertChannelConfig;

DataNewrelicAlertChannelConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .accountId(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the alert channel in New Relic. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID where you want to retrieve the alert channel. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/alert_channel#id DataNewrelicAlertChannel#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the alert channel in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/alert_channel#name DataNewrelicAlertChannel#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

The New Relic account ID where you want to retrieve the alert channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/alert_channel#account_id DataNewrelicAlertChannel#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.2/docs/data-sources/alert_channel#id DataNewrelicAlertChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataNewrelicAlertChannelConfigA <a name="DataNewrelicAlertChannelConfigA" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigA.Initializer"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_alert_channel.DataNewrelicAlertChannelConfigA;

DataNewrelicAlertChannelConfigA.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataNewrelicAlertChannelConfigAList <a name="DataNewrelicAlertChannelConfigAList" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.Initializer"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_alert_channel.DataNewrelicAlertChannelConfigAList;

new DataNewrelicAlertChannelConfigAList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.get"></a>

```java
public DataNewrelicAlertChannelConfigAOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataNewrelicAlertChannelConfigAOutputReference <a name="DataNewrelicAlertChannelConfigAOutputReference" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.data_newrelic_alert_channel.DataNewrelicAlertChannelConfigAOutputReference;

new DataNewrelicAlertChannelConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.authPassword">authPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.authUsername">authUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.headers">headers</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.includeJsonAttachment">includeJsonAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.payload">payload</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.payloadString">payloadString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.payloadType">payloadType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.recipients">recipients</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.routeKey">routeKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.serviceKey">serviceKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.tags">tags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.teams">teams</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigA">DataNewrelicAlertChannelConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `authPassword`<sup>Required</sup> <a name="authPassword" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.authPassword"></a>

```java
public java.lang.String getAuthPassword();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `authUsername`<sup>Required</sup> <a name="authUsername" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.authUsername"></a>

```java
public java.lang.String getAuthUsername();
```

- *Type:* java.lang.String

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.headers"></a>

```java
public StringMap getHeaders();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `includeJsonAttachment`<sup>Required</sup> <a name="includeJsonAttachment" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.includeJsonAttachment"></a>

```java
public java.lang.String getIncludeJsonAttachment();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.payload"></a>

```java
public StringMap getPayload();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `payloadString`<sup>Required</sup> <a name="payloadString" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.payloadString"></a>

```java
public java.lang.String getPayloadString();
```

- *Type:* java.lang.String

---

##### `payloadType`<sup>Required</sup> <a name="payloadType" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.payloadType"></a>

```java
public java.lang.String getPayloadType();
```

- *Type:* java.lang.String

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.recipients"></a>

```java
public java.lang.String getRecipients();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `routeKey`<sup>Required</sup> <a name="routeKey" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.routeKey"></a>

```java
public java.lang.String getRouteKey();
```

- *Type:* java.lang.String

---

##### `serviceKey`<sup>Required</sup> <a name="serviceKey" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.serviceKey"></a>

```java
public java.lang.String getServiceKey();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.tags"></a>

```java
public java.lang.String getTags();
```

- *Type:* java.lang.String

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.teams"></a>

```java
public java.lang.String getTeams();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigAOutputReference.property.internalValue"></a>

```java
public DataNewrelicAlertChannelConfigA getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicAlertChannel.DataNewrelicAlertChannelConfigA">DataNewrelicAlertChannelConfigA</a>

---



