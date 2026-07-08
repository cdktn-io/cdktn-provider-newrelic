# `cloudAwsEuSovereignIntegrations` Submodule <a name="`cloudAwsEuSovereignIntegrations` Submodule" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAwsEuSovereignIntegrations <a name="CloudAwsEuSovereignIntegrations" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.2/docs/resources/cloud_aws_eu_sovereign_integrations newrelic_cloud_aws_eu_sovereign_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer"></a>

```java
import io.cdktn.providers.newrelic.cloud_aws_eu_sovereign_integrations.CloudAwsEuSovereignIntegrations;

CloudAwsEuSovereignIntegrations.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .linkedAccountId(java.lang.Number)
//  .accountId(java.lang.Number)
//  .billing(CloudAwsEuSovereignIntegrationsBilling)
//  .cloudtrail(CloudAwsEuSovereignIntegrationsCloudtrail)
//  .id(java.lang.String)
//  .xRay(CloudAwsEuSovereignIntegrationsXRay)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.linkedAccountId">linkedAccountId</a></code> | <code>java.lang.Number</code> | The ID of the linked AWS EU Sovereign account in New Relic. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.billing">billing</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a></code> | billing block. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a></code> | cloudtrail block. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.2/docs/resources/cloud_aws_eu_sovereign_integrations#id CloudAwsEuSovereignIntegrations#id}. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.xRay">xRay</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a></code> | x_ray block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.linkedAccountId"></a>

- *Type:* java.lang.Number

The ID of the linked AWS EU Sovereign account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.2/docs/resources/cloud_aws_eu_sovereign_integrations#linked_account_id CloudAwsEuSovereignIntegrations#linked_account_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.2/docs/resources/cloud_aws_eu_sovereign_integrations#account_id CloudAwsEuSovereignIntegrations#account_id}

---

##### `billing`<sup>Optional</sup> <a name="billing" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.billing"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a>

billing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.2/docs/resources/cloud_aws_eu_sovereign_integrations#billing CloudAwsEuSovereignIntegrations#billing}

---

##### `cloudtrail`<sup>Optional</sup> <a name="cloudtrail" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.cloudtrail"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a>

cloudtrail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.2/docs/resources/cloud_aws_eu_sovereign_integrations#cloudtrail CloudAwsEuSovereignIntegrations#cloudtrail}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.2/docs/resources/cloud_aws_eu_sovereign_integrations#id CloudAwsEuSovereignIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `xRay`<sup>Optional</sup> <a name="xRay" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.Initializer.parameter.xRay"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a>

x_ray block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.2/docs/resources/cloud_aws_eu_sovereign_integrations#x_ray CloudAwsEuSovereignIntegrations#x_ray}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putBilling">putBilling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putCloudtrail">putCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putXRay">putXRay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetBilling">resetBilling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetCloudtrail">resetCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetXRay">resetXRay</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBilling` <a name="putBilling" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putBilling"></a>

```java
public void putBilling(CloudAwsEuSovereignIntegrationsBilling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putBilling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a>

---

##### `putCloudtrail` <a name="putCloudtrail" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putCloudtrail"></a>

```java
public void putCloudtrail(CloudAwsEuSovereignIntegrationsCloudtrail value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putCloudtrail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a>

---

##### `putXRay` <a name="putXRay" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putXRay"></a>

```java
public void putXRay(CloudAwsEuSovereignIntegrationsXRay value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.putXRay.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetBilling` <a name="resetBilling" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetBilling"></a>

```java
public void resetBilling()
```

##### `resetCloudtrail` <a name="resetCloudtrail" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetCloudtrail"></a>

```java
public void resetCloudtrail()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetId"></a>

```java
public void resetId()
```

##### `resetXRay` <a name="resetXRay" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.resetXRay"></a>

```java
public void resetXRay()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudAwsEuSovereignIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isConstruct"></a>

```java
import io.cdktn.providers.newrelic.cloud_aws_eu_sovereign_integrations.CloudAwsEuSovereignIntegrations;

CloudAwsEuSovereignIntegrations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformElement"></a>

```java
import io.cdktn.providers.newrelic.cloud_aws_eu_sovereign_integrations.CloudAwsEuSovereignIntegrations;

CloudAwsEuSovereignIntegrations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformResource"></a>

```java
import io.cdktn.providers.newrelic.cloud_aws_eu_sovereign_integrations.CloudAwsEuSovereignIntegrations;

CloudAwsEuSovereignIntegrations.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport"></a>

```java
import io.cdktn.providers.newrelic.cloud_aws_eu_sovereign_integrations.CloudAwsEuSovereignIntegrations;

CloudAwsEuSovereignIntegrations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudAwsEuSovereignIntegrations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudAwsEuSovereignIntegrations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudAwsEuSovereignIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudAwsEuSovereignIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.2/docs/resources/cloud_aws_eu_sovereign_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudAwsEuSovereignIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.billing">billing</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference">CloudAwsEuSovereignIntegrationsBillingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference">CloudAwsEuSovereignIntegrationsCloudtrailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.xRay">xRay</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference">CloudAwsEuSovereignIntegrationsXRayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.billingInput">billingInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cloudtrailInput">cloudtrailInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.linkedAccountIdInput">linkedAccountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.xRayInput">xRayInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.linkedAccountId">linkedAccountId</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `billing`<sup>Required</sup> <a name="billing" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.billing"></a>

```java
public CloudAwsEuSovereignIntegrationsBillingOutputReference getBilling();
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference">CloudAwsEuSovereignIntegrationsBillingOutputReference</a>

---

##### `cloudtrail`<sup>Required</sup> <a name="cloudtrail" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cloudtrail"></a>

```java
public CloudAwsEuSovereignIntegrationsCloudtrailOutputReference getCloudtrail();
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference">CloudAwsEuSovereignIntegrationsCloudtrailOutputReference</a>

---

##### `xRay`<sup>Required</sup> <a name="xRay" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.xRay"></a>

```java
public CloudAwsEuSovereignIntegrationsXRayOutputReference getXRay();
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference">CloudAwsEuSovereignIntegrationsXRayOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `billingInput`<sup>Optional</sup> <a name="billingInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.billingInput"></a>

```java
public CloudAwsEuSovereignIntegrationsBilling getBillingInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a>

---

##### `cloudtrailInput`<sup>Optional</sup> <a name="cloudtrailInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.cloudtrailInput"></a>

```java
public CloudAwsEuSovereignIntegrationsCloudtrail getCloudtrailInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `linkedAccountIdInput`<sup>Optional</sup> <a name="linkedAccountIdInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.linkedAccountIdInput"></a>

```java
public java.lang.Number getLinkedAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `xRayInput`<sup>Optional</sup> <a name="xRayInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.xRayInput"></a>

```java
public CloudAwsEuSovereignIntegrationsXRay getXRayInput();
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.linkedAccountId"></a>

```java
public java.lang.Number getLinkedAccountId();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAwsEuSovereignIntegrationsBilling <a name="CloudAwsEuSovereignIntegrationsBilling" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling.Initializer"></a>

```java
import io.cdktn.providers.newrelic.cloud_aws_eu_sovereign_integrations.CloudAwsEuSovereignIntegrationsBilling;

CloudAwsEuSovereignIntegrationsBilling.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.2/docs/resources/cloud_aws_eu_sovereign_integrations#metrics_polling_interval CloudAwsEuSovereignIntegrations#metrics_polling_interval}

---

### CloudAwsEuSovereignIntegrationsCloudtrail <a name="CloudAwsEuSovereignIntegrationsCloudtrail" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail.Initializer"></a>

```java
import io.cdktn.providers.newrelic.cloud_aws_eu_sovereign_integrations.CloudAwsEuSovereignIntegrationsCloudtrail;

CloudAwsEuSovereignIntegrationsCloudtrail.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.2/docs/resources/cloud_aws_eu_sovereign_integrations#aws_regions CloudAwsEuSovereignIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.2/docs/resources/cloud_aws_eu_sovereign_integrations#metrics_polling_interval CloudAwsEuSovereignIntegrations#metrics_polling_interval}

---

### CloudAwsEuSovereignIntegrationsConfig <a name="CloudAwsEuSovereignIntegrationsConfig" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.Initializer"></a>

```java
import io.cdktn.providers.newrelic.cloud_aws_eu_sovereign_integrations.CloudAwsEuSovereignIntegrationsConfig;

CloudAwsEuSovereignIntegrationsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .linkedAccountId(java.lang.Number)
//  .accountId(java.lang.Number)
//  .billing(CloudAwsEuSovereignIntegrationsBilling)
//  .cloudtrail(CloudAwsEuSovereignIntegrationsCloudtrail)
//  .id(java.lang.String)
//  .xRay(CloudAwsEuSovereignIntegrationsXRay)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.linkedAccountId">linkedAccountId</a></code> | <code>java.lang.Number</code> | The ID of the linked AWS EU Sovereign account in New Relic. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.billing">billing</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a></code> | billing block. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a></code> | cloudtrail block. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.2/docs/resources/cloud_aws_eu_sovereign_integrations#id CloudAwsEuSovereignIntegrations#id}. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.xRay">xRay</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a></code> | x_ray block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.linkedAccountId"></a>

```java
public java.lang.Number getLinkedAccountId();
```

- *Type:* java.lang.Number

The ID of the linked AWS EU Sovereign account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.2/docs/resources/cloud_aws_eu_sovereign_integrations#linked_account_id CloudAwsEuSovereignIntegrations#linked_account_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.2/docs/resources/cloud_aws_eu_sovereign_integrations#account_id CloudAwsEuSovereignIntegrations#account_id}

---

##### `billing`<sup>Optional</sup> <a name="billing" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.billing"></a>

```java
public CloudAwsEuSovereignIntegrationsBilling getBilling();
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a>

billing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.2/docs/resources/cloud_aws_eu_sovereign_integrations#billing CloudAwsEuSovereignIntegrations#billing}

---

##### `cloudtrail`<sup>Optional</sup> <a name="cloudtrail" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.cloudtrail"></a>

```java
public CloudAwsEuSovereignIntegrationsCloudtrail getCloudtrail();
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a>

cloudtrail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.2/docs/resources/cloud_aws_eu_sovereign_integrations#cloudtrail CloudAwsEuSovereignIntegrations#cloudtrail}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.2/docs/resources/cloud_aws_eu_sovereign_integrations#id CloudAwsEuSovereignIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `xRay`<sup>Optional</sup> <a name="xRay" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsConfig.property.xRay"></a>

```java
public CloudAwsEuSovereignIntegrationsXRay getXRay();
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a>

x_ray block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.2/docs/resources/cloud_aws_eu_sovereign_integrations#x_ray CloudAwsEuSovereignIntegrations#x_ray}

---

### CloudAwsEuSovereignIntegrationsXRay <a name="CloudAwsEuSovereignIntegrationsXRay" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay.Initializer"></a>

```java
import io.cdktn.providers.newrelic.cloud_aws_eu_sovereign_integrations.CloudAwsEuSovereignIntegrationsXRay;

CloudAwsEuSovereignIntegrationsXRay.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.2/docs/resources/cloud_aws_eu_sovereign_integrations#aws_regions CloudAwsEuSovereignIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.94.2/docs/resources/cloud_aws_eu_sovereign_integrations#metrics_polling_interval CloudAwsEuSovereignIntegrations#metrics_polling_interval}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudAwsEuSovereignIntegrationsBillingOutputReference <a name="CloudAwsEuSovereignIntegrationsBillingOutputReference" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.cloud_aws_eu_sovereign_integrations.CloudAwsEuSovereignIntegrationsBillingOutputReference;

new CloudAwsEuSovereignIntegrationsBillingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBillingOutputReference.property.internalValue"></a>

```java
public CloudAwsEuSovereignIntegrationsBilling getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsBilling">CloudAwsEuSovereignIntegrationsBilling</a>

---


### CloudAwsEuSovereignIntegrationsCloudtrailOutputReference <a name="CloudAwsEuSovereignIntegrationsCloudtrailOutputReference" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.cloud_aws_eu_sovereign_integrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference;

new CloudAwsEuSovereignIntegrationsCloudtrailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrailOutputReference.property.internalValue"></a>

```java
public CloudAwsEuSovereignIntegrationsCloudtrail getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsCloudtrail">CloudAwsEuSovereignIntegrationsCloudtrail</a>

---


### CloudAwsEuSovereignIntegrationsXRayOutputReference <a name="CloudAwsEuSovereignIntegrationsXRayOutputReference" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.Initializer"></a>

```java
import io.cdktn.providers.newrelic.cloud_aws_eu_sovereign_integrations.CloudAwsEuSovereignIntegrationsXRayOutputReference;

new CloudAwsEuSovereignIntegrationsXRayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRayOutputReference.property.internalValue"></a>

```java
public CloudAwsEuSovereignIntegrationsXRay getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignIntegrations.CloudAwsEuSovereignIntegrationsXRay">CloudAwsEuSovereignIntegrationsXRay</a>

---



