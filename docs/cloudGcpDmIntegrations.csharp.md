# `cloudGcpDmIntegrations` Submodule <a name="`cloudGcpDmIntegrations` Submodule" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudGcpDmIntegrations <a name="CloudGcpDmIntegrations" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations newrelic_cloud_gcp_dm_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrations(Construct Scope, string Id, CloudGcpDmIntegrationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig">CloudGcpDmIntegrationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig">CloudGcpDmIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAiPlatform">PutAiPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAlloyDb">PutAlloyDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putApiGateway">PutApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAppEngine">PutAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigQuery">PutBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigTable">PutBigTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putComposer">PutComposer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataFlow">PutDataFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataProc">PutDataProc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataStore">PutDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAppHosting">PutFirebaseAppHosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAuth">PutFirebaseAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseDatabase">PutFirebaseDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseHosting">PutFirebaseHosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseStorage">PutFirebaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseVertexAi">PutFirebaseVertexAi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirestore">PutFirestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFunctions">PutFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putInterconnect">PutInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putIstio">PutIstio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putKubernetes">PutKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putLoadBalancing">PutLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putManagedKafka">PutManagedKafka</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemCache">PutMemCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemoryStore">PutMemoryStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putPubSub">PutPubSub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRedis">PutRedis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRouter">PutRouter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRun">PutRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSpanner">PutSpanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSql">PutSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVirtualMachines">PutVirtualMachines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVpcAccess">PutVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAiPlatform">ResetAiPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAlloyDb">ResetAlloyDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetApiGateway">ResetApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAppEngine">ResetAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetBigQuery">ResetBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetBigTable">ResetBigTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetComposer">ResetComposer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataFlow">ResetDataFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataProc">ResetDataProc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataStore">ResetDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseAppHosting">ResetFirebaseAppHosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseAuth">ResetFirebaseAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseDatabase">ResetFirebaseDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseHosting">ResetFirebaseHosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseStorage">ResetFirebaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseVertexAi">ResetFirebaseVertexAi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirestore">ResetFirestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFunctions">ResetFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetInterconnect">ResetInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetIstio">ResetIstio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetKubernetes">ResetKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetLoadBalancing">ResetLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetManagedKafka">ResetManagedKafka</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetMemCache">ResetMemCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetMemoryStore">ResetMemoryStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetPubSub">ResetPubSub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRedis">ResetRedis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRouter">ResetRouter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRun">ResetRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetSpanner">ResetSpanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetSql">ResetSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetStorage">ResetStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetVirtualMachines">ResetVirtualMachines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetVpcAccess">ResetVpcAccess</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAiPlatform` <a name="PutAiPlatform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAiPlatform"></a>

```csharp
private void PutAiPlatform(CloudGcpDmIntegrationsAiPlatform Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAiPlatform.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a>

---

##### `PutAlloyDb` <a name="PutAlloyDb" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAlloyDb"></a>

```csharp
private void PutAlloyDb(CloudGcpDmIntegrationsAlloyDb Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAlloyDb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a>

---

##### `PutApiGateway` <a name="PutApiGateway" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putApiGateway"></a>

```csharp
private void PutApiGateway(CloudGcpDmIntegrationsApiGateway Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putApiGateway.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a>

---

##### `PutAppEngine` <a name="PutAppEngine" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAppEngine"></a>

```csharp
private void PutAppEngine(CloudGcpDmIntegrationsAppEngine Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putAppEngine.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a>

---

##### `PutBigQuery` <a name="PutBigQuery" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigQuery"></a>

```csharp
private void PutBigQuery(CloudGcpDmIntegrationsBigQuery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a>

---

##### `PutBigTable` <a name="PutBigTable" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigTable"></a>

```csharp
private void PutBigTable(CloudGcpDmIntegrationsBigTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putBigTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a>

---

##### `PutComposer` <a name="PutComposer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putComposer"></a>

```csharp
private void PutComposer(CloudGcpDmIntegrationsComposer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putComposer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a>

---

##### `PutDataFlow` <a name="PutDataFlow" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataFlow"></a>

```csharp
private void PutDataFlow(CloudGcpDmIntegrationsDataFlow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataFlow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a>

---

##### `PutDataProc` <a name="PutDataProc" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataProc"></a>

```csharp
private void PutDataProc(CloudGcpDmIntegrationsDataProc Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataProc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a>

---

##### `PutDataStore` <a name="PutDataStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataStore"></a>

```csharp
private void PutDataStore(CloudGcpDmIntegrationsDataStore Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putDataStore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a>

---

##### `PutFirebaseAppHosting` <a name="PutFirebaseAppHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAppHosting"></a>

```csharp
private void PutFirebaseAppHosting(CloudGcpDmIntegrationsFirebaseAppHosting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAppHosting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a>

---

##### `PutFirebaseAuth` <a name="PutFirebaseAuth" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAuth"></a>

```csharp
private void PutFirebaseAuth(CloudGcpDmIntegrationsFirebaseAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a>

---

##### `PutFirebaseDatabase` <a name="PutFirebaseDatabase" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseDatabase"></a>

```csharp
private void PutFirebaseDatabase(CloudGcpDmIntegrationsFirebaseDatabase Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a>

---

##### `PutFirebaseHosting` <a name="PutFirebaseHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseHosting"></a>

```csharp
private void PutFirebaseHosting(CloudGcpDmIntegrationsFirebaseHosting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseHosting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a>

---

##### `PutFirebaseStorage` <a name="PutFirebaseStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseStorage"></a>

```csharp
private void PutFirebaseStorage(CloudGcpDmIntegrationsFirebaseStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a>

---

##### `PutFirebaseVertexAi` <a name="PutFirebaseVertexAi" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseVertexAi"></a>

```csharp
private void PutFirebaseVertexAi(CloudGcpDmIntegrationsFirebaseVertexAi Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirebaseVertexAi.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a>

---

##### `PutFirestore` <a name="PutFirestore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirestore"></a>

```csharp
private void PutFirestore(CloudGcpDmIntegrationsFirestore Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFirestore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a>

---

##### `PutFunctions` <a name="PutFunctions" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFunctions"></a>

```csharp
private void PutFunctions(CloudGcpDmIntegrationsFunctions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putFunctions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a>

---

##### `PutInterconnect` <a name="PutInterconnect" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putInterconnect"></a>

```csharp
private void PutInterconnect(CloudGcpDmIntegrationsInterconnect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putInterconnect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a>

---

##### `PutIstio` <a name="PutIstio" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putIstio"></a>

```csharp
private void PutIstio(CloudGcpDmIntegrationsIstio Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putIstio.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a>

---

##### `PutKubernetes` <a name="PutKubernetes" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putKubernetes"></a>

```csharp
private void PutKubernetes(CloudGcpDmIntegrationsKubernetes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a>

---

##### `PutLoadBalancing` <a name="PutLoadBalancing" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putLoadBalancing"></a>

```csharp
private void PutLoadBalancing(CloudGcpDmIntegrationsLoadBalancing Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putLoadBalancing.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a>

---

##### `PutManagedKafka` <a name="PutManagedKafka" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putManagedKafka"></a>

```csharp
private void PutManagedKafka(CloudGcpDmIntegrationsManagedKafka Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putManagedKafka.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a>

---

##### `PutMemCache` <a name="PutMemCache" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemCache"></a>

```csharp
private void PutMemCache(CloudGcpDmIntegrationsMemCache Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemCache.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a>

---

##### `PutMemoryStore` <a name="PutMemoryStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemoryStore"></a>

```csharp
private void PutMemoryStore(CloudGcpDmIntegrationsMemoryStore Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putMemoryStore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a>

---

##### `PutPubSub` <a name="PutPubSub" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putPubSub"></a>

```csharp
private void PutPubSub(CloudGcpDmIntegrationsPubSub Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putPubSub.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a>

---

##### `PutRedis` <a name="PutRedis" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRedis"></a>

```csharp
private void PutRedis(CloudGcpDmIntegrationsRedis Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRedis.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a>

---

##### `PutRouter` <a name="PutRouter" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRouter"></a>

```csharp
private void PutRouter(CloudGcpDmIntegrationsRouter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRouter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a>

---

##### `PutRun` <a name="PutRun" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRun"></a>

```csharp
private void PutRun(CloudGcpDmIntegrationsRun Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putRun.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a>

---

##### `PutSpanner` <a name="PutSpanner" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSpanner"></a>

```csharp
private void PutSpanner(CloudGcpDmIntegrationsSpanner Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSpanner.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a>

---

##### `PutSql` <a name="PutSql" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSql"></a>

```csharp
private void PutSql(CloudGcpDmIntegrationsSql Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putSql.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a>

---

##### `PutStorage` <a name="PutStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putStorage"></a>

```csharp
private void PutStorage(CloudGcpDmIntegrationsStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a>

---

##### `PutVirtualMachines` <a name="PutVirtualMachines" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVirtualMachines"></a>

```csharp
private void PutVirtualMachines(CloudGcpDmIntegrationsVirtualMachines Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVirtualMachines.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a>

---

##### `PutVpcAccess` <a name="PutVpcAccess" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVpcAccess"></a>

```csharp
private void PutVpcAccess(CloudGcpDmIntegrationsVpcAccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.putVpcAccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetAiPlatform` <a name="ResetAiPlatform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAiPlatform"></a>

```csharp
private void ResetAiPlatform()
```

##### `ResetAlloyDb` <a name="ResetAlloyDb" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAlloyDb"></a>

```csharp
private void ResetAlloyDb()
```

##### `ResetApiGateway` <a name="ResetApiGateway" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetApiGateway"></a>

```csharp
private void ResetApiGateway()
```

##### `ResetAppEngine` <a name="ResetAppEngine" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetAppEngine"></a>

```csharp
private void ResetAppEngine()
```

##### `ResetBigQuery` <a name="ResetBigQuery" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetBigQuery"></a>

```csharp
private void ResetBigQuery()
```

##### `ResetBigTable` <a name="ResetBigTable" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetBigTable"></a>

```csharp
private void ResetBigTable()
```

##### `ResetComposer` <a name="ResetComposer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetComposer"></a>

```csharp
private void ResetComposer()
```

##### `ResetDataFlow` <a name="ResetDataFlow" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataFlow"></a>

```csharp
private void ResetDataFlow()
```

##### `ResetDataProc` <a name="ResetDataProc" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataProc"></a>

```csharp
private void ResetDataProc()
```

##### `ResetDataStore` <a name="ResetDataStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetDataStore"></a>

```csharp
private void ResetDataStore()
```

##### `ResetFirebaseAppHosting` <a name="ResetFirebaseAppHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseAppHosting"></a>

```csharp
private void ResetFirebaseAppHosting()
```

##### `ResetFirebaseAuth` <a name="ResetFirebaseAuth" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseAuth"></a>

```csharp
private void ResetFirebaseAuth()
```

##### `ResetFirebaseDatabase` <a name="ResetFirebaseDatabase" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseDatabase"></a>

```csharp
private void ResetFirebaseDatabase()
```

##### `ResetFirebaseHosting` <a name="ResetFirebaseHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseHosting"></a>

```csharp
private void ResetFirebaseHosting()
```

##### `ResetFirebaseStorage` <a name="ResetFirebaseStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseStorage"></a>

```csharp
private void ResetFirebaseStorage()
```

##### `ResetFirebaseVertexAi` <a name="ResetFirebaseVertexAi" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirebaseVertexAi"></a>

```csharp
private void ResetFirebaseVertexAi()
```

##### `ResetFirestore` <a name="ResetFirestore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFirestore"></a>

```csharp
private void ResetFirestore()
```

##### `ResetFunctions` <a name="ResetFunctions" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetFunctions"></a>

```csharp
private void ResetFunctions()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInterconnect` <a name="ResetInterconnect" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetInterconnect"></a>

```csharp
private void ResetInterconnect()
```

##### `ResetIstio` <a name="ResetIstio" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetIstio"></a>

```csharp
private void ResetIstio()
```

##### `ResetKubernetes` <a name="ResetKubernetes" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetKubernetes"></a>

```csharp
private void ResetKubernetes()
```

##### `ResetLoadBalancing` <a name="ResetLoadBalancing" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetLoadBalancing"></a>

```csharp
private void ResetLoadBalancing()
```

##### `ResetManagedKafka` <a name="ResetManagedKafka" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetManagedKafka"></a>

```csharp
private void ResetManagedKafka()
```

##### `ResetMemCache` <a name="ResetMemCache" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetMemCache"></a>

```csharp
private void ResetMemCache()
```

##### `ResetMemoryStore` <a name="ResetMemoryStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetMemoryStore"></a>

```csharp
private void ResetMemoryStore()
```

##### `ResetPubSub` <a name="ResetPubSub" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetPubSub"></a>

```csharp
private void ResetPubSub()
```

##### `ResetRedis` <a name="ResetRedis" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRedis"></a>

```csharp
private void ResetRedis()
```

##### `ResetRouter` <a name="ResetRouter" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRouter"></a>

```csharp
private void ResetRouter()
```

##### `ResetRun` <a name="ResetRun" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetRun"></a>

```csharp
private void ResetRun()
```

##### `ResetSpanner` <a name="ResetSpanner" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetSpanner"></a>

```csharp
private void ResetSpanner()
```

##### `ResetSql` <a name="ResetSql" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetSql"></a>

```csharp
private void ResetSql()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetStorage"></a>

```csharp
private void ResetStorage()
```

##### `ResetVirtualMachines` <a name="ResetVirtualMachines" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetVirtualMachines"></a>

```csharp
private void ResetVirtualMachines()
```

##### `ResetVpcAccess` <a name="ResetVpcAccess" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.resetVpcAccess"></a>

```csharp
private void ResetVpcAccess()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudGcpDmIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

CloudGcpDmIntegrations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

CloudGcpDmIntegrations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

CloudGcpDmIntegrations.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

CloudGcpDmIntegrations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudGcpDmIntegrations resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudGcpDmIntegrations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudGcpDmIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudGcpDmIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.aiPlatform">AiPlatform</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference">CloudGcpDmIntegrationsAiPlatformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.alloyDb">AlloyDb</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference">CloudGcpDmIntegrationsAlloyDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.apiGateway">ApiGateway</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference">CloudGcpDmIntegrationsApiGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.appEngine">AppEngine</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference">CloudGcpDmIntegrationsAppEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigQuery">BigQuery</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference">CloudGcpDmIntegrationsBigQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigTable">BigTable</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference">CloudGcpDmIntegrationsBigTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.composer">Composer</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference">CloudGcpDmIntegrationsComposerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataFlow">DataFlow</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference">CloudGcpDmIntegrationsDataFlowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataProc">DataProc</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference">CloudGcpDmIntegrationsDataProcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataStore">DataStore</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference">CloudGcpDmIntegrationsDataStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAppHosting">FirebaseAppHosting</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference">CloudGcpDmIntegrationsFirebaseAppHostingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAuth">FirebaseAuth</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference">CloudGcpDmIntegrationsFirebaseAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseDatabase">FirebaseDatabase</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference">CloudGcpDmIntegrationsFirebaseDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseHosting">FirebaseHosting</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference">CloudGcpDmIntegrationsFirebaseHostingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseStorage">FirebaseStorage</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference">CloudGcpDmIntegrationsFirebaseStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseVertexAi">FirebaseVertexAi</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference">CloudGcpDmIntegrationsFirebaseVertexAiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firestore">Firestore</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference">CloudGcpDmIntegrationsFirestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.functions">Functions</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference">CloudGcpDmIntegrationsFunctionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.interconnect">Interconnect</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference">CloudGcpDmIntegrationsInterconnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.istio">Istio</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference">CloudGcpDmIntegrationsIstioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference">CloudGcpDmIntegrationsKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.loadBalancing">LoadBalancing</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference">CloudGcpDmIntegrationsLoadBalancingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.managedKafka">ManagedKafka</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference">CloudGcpDmIntegrationsManagedKafkaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memCache">MemCache</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference">CloudGcpDmIntegrationsMemCacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memoryStore">MemoryStore</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference">CloudGcpDmIntegrationsMemoryStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.pubSub">PubSub</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference">CloudGcpDmIntegrationsPubSubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.redis">Redis</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference">CloudGcpDmIntegrationsRedisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.router">Router</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference">CloudGcpDmIntegrationsRouterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.run">Run</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference">CloudGcpDmIntegrationsRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.spanner">Spanner</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference">CloudGcpDmIntegrationsSpannerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.sql">Sql</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference">CloudGcpDmIntegrationsSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference">CloudGcpDmIntegrationsStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.virtualMachines">VirtualMachines</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference">CloudGcpDmIntegrationsVirtualMachinesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.vpcAccess">VpcAccess</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference">CloudGcpDmIntegrationsVpcAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.accountIdInput">AccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.aiPlatformInput">AiPlatformInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.alloyDbInput">AlloyDbInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.apiGatewayInput">ApiGatewayInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.appEngineInput">AppEngineInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigQueryInput">BigQueryInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigTableInput">BigTableInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.composerInput">ComposerInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataFlowInput">DataFlowInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataProcInput">DataProcInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataStoreInput">DataStoreInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAppHostingInput">FirebaseAppHostingInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAuthInput">FirebaseAuthInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseDatabaseInput">FirebaseDatabaseInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseHostingInput">FirebaseHostingInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseStorageInput">FirebaseStorageInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseVertexAiInput">FirebaseVertexAiInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firestoreInput">FirestoreInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.functionsInput">FunctionsInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.interconnectInput">InterconnectInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.istioInput">IstioInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.kubernetesInput">KubernetesInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.linkedAccountIdInput">LinkedAccountIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.loadBalancingInput">LoadBalancingInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.managedKafkaInput">ManagedKafkaInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memCacheInput">MemCacheInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memoryStoreInput">MemoryStoreInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.pubSubInput">PubSubInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.redisInput">RedisInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.routerInput">RouterInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.runInput">RunInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.spannerInput">SpannerInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.sqlInput">SqlInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.storageInput">StorageInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.virtualMachinesInput">VirtualMachinesInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.vpcAccessInput">VpcAccessInput</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.accountId">AccountId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.linkedAccountId">LinkedAccountId</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AiPlatform`<sup>Required</sup> <a name="AiPlatform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.aiPlatform"></a>

```csharp
public CloudGcpDmIntegrationsAiPlatformOutputReference AiPlatform { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference">CloudGcpDmIntegrationsAiPlatformOutputReference</a>

---

##### `AlloyDb`<sup>Required</sup> <a name="AlloyDb" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.alloyDb"></a>

```csharp
public CloudGcpDmIntegrationsAlloyDbOutputReference AlloyDb { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference">CloudGcpDmIntegrationsAlloyDbOutputReference</a>

---

##### `ApiGateway`<sup>Required</sup> <a name="ApiGateway" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.apiGateway"></a>

```csharp
public CloudGcpDmIntegrationsApiGatewayOutputReference ApiGateway { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference">CloudGcpDmIntegrationsApiGatewayOutputReference</a>

---

##### `AppEngine`<sup>Required</sup> <a name="AppEngine" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.appEngine"></a>

```csharp
public CloudGcpDmIntegrationsAppEngineOutputReference AppEngine { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference">CloudGcpDmIntegrationsAppEngineOutputReference</a>

---

##### `BigQuery`<sup>Required</sup> <a name="BigQuery" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigQuery"></a>

```csharp
public CloudGcpDmIntegrationsBigQueryOutputReference BigQuery { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference">CloudGcpDmIntegrationsBigQueryOutputReference</a>

---

##### `BigTable`<sup>Required</sup> <a name="BigTable" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigTable"></a>

```csharp
public CloudGcpDmIntegrationsBigTableOutputReference BigTable { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference">CloudGcpDmIntegrationsBigTableOutputReference</a>

---

##### `Composer`<sup>Required</sup> <a name="Composer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.composer"></a>

```csharp
public CloudGcpDmIntegrationsComposerOutputReference Composer { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference">CloudGcpDmIntegrationsComposerOutputReference</a>

---

##### `DataFlow`<sup>Required</sup> <a name="DataFlow" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataFlow"></a>

```csharp
public CloudGcpDmIntegrationsDataFlowOutputReference DataFlow { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference">CloudGcpDmIntegrationsDataFlowOutputReference</a>

---

##### `DataProc`<sup>Required</sup> <a name="DataProc" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataProc"></a>

```csharp
public CloudGcpDmIntegrationsDataProcOutputReference DataProc { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference">CloudGcpDmIntegrationsDataProcOutputReference</a>

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataStore"></a>

```csharp
public CloudGcpDmIntegrationsDataStoreOutputReference DataStore { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference">CloudGcpDmIntegrationsDataStoreOutputReference</a>

---

##### `FirebaseAppHosting`<sup>Required</sup> <a name="FirebaseAppHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAppHosting"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseAppHostingOutputReference FirebaseAppHosting { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference">CloudGcpDmIntegrationsFirebaseAppHostingOutputReference</a>

---

##### `FirebaseAuth`<sup>Required</sup> <a name="FirebaseAuth" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAuth"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseAuthOutputReference FirebaseAuth { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference">CloudGcpDmIntegrationsFirebaseAuthOutputReference</a>

---

##### `FirebaseDatabase`<sup>Required</sup> <a name="FirebaseDatabase" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseDatabase"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseDatabaseOutputReference FirebaseDatabase { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference">CloudGcpDmIntegrationsFirebaseDatabaseOutputReference</a>

---

##### `FirebaseHosting`<sup>Required</sup> <a name="FirebaseHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseHosting"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseHostingOutputReference FirebaseHosting { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference">CloudGcpDmIntegrationsFirebaseHostingOutputReference</a>

---

##### `FirebaseStorage`<sup>Required</sup> <a name="FirebaseStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseStorage"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseStorageOutputReference FirebaseStorage { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference">CloudGcpDmIntegrationsFirebaseStorageOutputReference</a>

---

##### `FirebaseVertexAi`<sup>Required</sup> <a name="FirebaseVertexAi" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseVertexAi"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseVertexAiOutputReference FirebaseVertexAi { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference">CloudGcpDmIntegrationsFirebaseVertexAiOutputReference</a>

---

##### `Firestore`<sup>Required</sup> <a name="Firestore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firestore"></a>

```csharp
public CloudGcpDmIntegrationsFirestoreOutputReference Firestore { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference">CloudGcpDmIntegrationsFirestoreOutputReference</a>

---

##### `Functions`<sup>Required</sup> <a name="Functions" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.functions"></a>

```csharp
public CloudGcpDmIntegrationsFunctionsOutputReference Functions { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference">CloudGcpDmIntegrationsFunctionsOutputReference</a>

---

##### `Interconnect`<sup>Required</sup> <a name="Interconnect" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.interconnect"></a>

```csharp
public CloudGcpDmIntegrationsInterconnectOutputReference Interconnect { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference">CloudGcpDmIntegrationsInterconnectOutputReference</a>

---

##### `Istio`<sup>Required</sup> <a name="Istio" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.istio"></a>

```csharp
public CloudGcpDmIntegrationsIstioOutputReference Istio { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference">CloudGcpDmIntegrationsIstioOutputReference</a>

---

##### `Kubernetes`<sup>Required</sup> <a name="Kubernetes" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.kubernetes"></a>

```csharp
public CloudGcpDmIntegrationsKubernetesOutputReference Kubernetes { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference">CloudGcpDmIntegrationsKubernetesOutputReference</a>

---

##### `LoadBalancing`<sup>Required</sup> <a name="LoadBalancing" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.loadBalancing"></a>

```csharp
public CloudGcpDmIntegrationsLoadBalancingOutputReference LoadBalancing { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference">CloudGcpDmIntegrationsLoadBalancingOutputReference</a>

---

##### `ManagedKafka`<sup>Required</sup> <a name="ManagedKafka" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.managedKafka"></a>

```csharp
public CloudGcpDmIntegrationsManagedKafkaOutputReference ManagedKafka { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference">CloudGcpDmIntegrationsManagedKafkaOutputReference</a>

---

##### `MemCache`<sup>Required</sup> <a name="MemCache" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memCache"></a>

```csharp
public CloudGcpDmIntegrationsMemCacheOutputReference MemCache { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference">CloudGcpDmIntegrationsMemCacheOutputReference</a>

---

##### `MemoryStore`<sup>Required</sup> <a name="MemoryStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memoryStore"></a>

```csharp
public CloudGcpDmIntegrationsMemoryStoreOutputReference MemoryStore { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference">CloudGcpDmIntegrationsMemoryStoreOutputReference</a>

---

##### `PubSub`<sup>Required</sup> <a name="PubSub" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.pubSub"></a>

```csharp
public CloudGcpDmIntegrationsPubSubOutputReference PubSub { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference">CloudGcpDmIntegrationsPubSubOutputReference</a>

---

##### `Redis`<sup>Required</sup> <a name="Redis" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.redis"></a>

```csharp
public CloudGcpDmIntegrationsRedisOutputReference Redis { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference">CloudGcpDmIntegrationsRedisOutputReference</a>

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.router"></a>

```csharp
public CloudGcpDmIntegrationsRouterOutputReference Router { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference">CloudGcpDmIntegrationsRouterOutputReference</a>

---

##### `Run`<sup>Required</sup> <a name="Run" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.run"></a>

```csharp
public CloudGcpDmIntegrationsRunOutputReference Run { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference">CloudGcpDmIntegrationsRunOutputReference</a>

---

##### `Spanner`<sup>Required</sup> <a name="Spanner" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.spanner"></a>

```csharp
public CloudGcpDmIntegrationsSpannerOutputReference Spanner { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference">CloudGcpDmIntegrationsSpannerOutputReference</a>

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.sql"></a>

```csharp
public CloudGcpDmIntegrationsSqlOutputReference Sql { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference">CloudGcpDmIntegrationsSqlOutputReference</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.storage"></a>

```csharp
public CloudGcpDmIntegrationsStorageOutputReference Storage { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference">CloudGcpDmIntegrationsStorageOutputReference</a>

---

##### `VirtualMachines`<sup>Required</sup> <a name="VirtualMachines" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.virtualMachines"></a>

```csharp
public CloudGcpDmIntegrationsVirtualMachinesOutputReference VirtualMachines { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference">CloudGcpDmIntegrationsVirtualMachinesOutputReference</a>

---

##### `VpcAccess`<sup>Required</sup> <a name="VpcAccess" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.vpcAccess"></a>

```csharp
public CloudGcpDmIntegrationsVpcAccessOutputReference VpcAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference">CloudGcpDmIntegrationsVpcAccessOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.accountIdInput"></a>

```csharp
public double AccountIdInput { get; }
```

- *Type:* double

---

##### `AiPlatformInput`<sup>Optional</sup> <a name="AiPlatformInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.aiPlatformInput"></a>

```csharp
public CloudGcpDmIntegrationsAiPlatform AiPlatformInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a>

---

##### `AlloyDbInput`<sup>Optional</sup> <a name="AlloyDbInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.alloyDbInput"></a>

```csharp
public CloudGcpDmIntegrationsAlloyDb AlloyDbInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a>

---

##### `ApiGatewayInput`<sup>Optional</sup> <a name="ApiGatewayInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.apiGatewayInput"></a>

```csharp
public CloudGcpDmIntegrationsApiGateway ApiGatewayInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a>

---

##### `AppEngineInput`<sup>Optional</sup> <a name="AppEngineInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.appEngineInput"></a>

```csharp
public CloudGcpDmIntegrationsAppEngine AppEngineInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a>

---

##### `BigQueryInput`<sup>Optional</sup> <a name="BigQueryInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigQueryInput"></a>

```csharp
public CloudGcpDmIntegrationsBigQuery BigQueryInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a>

---

##### `BigTableInput`<sup>Optional</sup> <a name="BigTableInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.bigTableInput"></a>

```csharp
public CloudGcpDmIntegrationsBigTable BigTableInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a>

---

##### `ComposerInput`<sup>Optional</sup> <a name="ComposerInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.composerInput"></a>

```csharp
public CloudGcpDmIntegrationsComposer ComposerInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a>

---

##### `DataFlowInput`<sup>Optional</sup> <a name="DataFlowInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataFlowInput"></a>

```csharp
public CloudGcpDmIntegrationsDataFlow DataFlowInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a>

---

##### `DataProcInput`<sup>Optional</sup> <a name="DataProcInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataProcInput"></a>

```csharp
public CloudGcpDmIntegrationsDataProc DataProcInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a>

---

##### `DataStoreInput`<sup>Optional</sup> <a name="DataStoreInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.dataStoreInput"></a>

```csharp
public CloudGcpDmIntegrationsDataStore DataStoreInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a>

---

##### `FirebaseAppHostingInput`<sup>Optional</sup> <a name="FirebaseAppHostingInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAppHostingInput"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseAppHosting FirebaseAppHostingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a>

---

##### `FirebaseAuthInput`<sup>Optional</sup> <a name="FirebaseAuthInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseAuthInput"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseAuth FirebaseAuthInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a>

---

##### `FirebaseDatabaseInput`<sup>Optional</sup> <a name="FirebaseDatabaseInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseDatabaseInput"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseDatabase FirebaseDatabaseInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a>

---

##### `FirebaseHostingInput`<sup>Optional</sup> <a name="FirebaseHostingInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseHostingInput"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseHosting FirebaseHostingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a>

---

##### `FirebaseStorageInput`<sup>Optional</sup> <a name="FirebaseStorageInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseStorageInput"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseStorage FirebaseStorageInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a>

---

##### `FirebaseVertexAiInput`<sup>Optional</sup> <a name="FirebaseVertexAiInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firebaseVertexAiInput"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseVertexAi FirebaseVertexAiInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a>

---

##### `FirestoreInput`<sup>Optional</sup> <a name="FirestoreInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.firestoreInput"></a>

```csharp
public CloudGcpDmIntegrationsFirestore FirestoreInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a>

---

##### `FunctionsInput`<sup>Optional</sup> <a name="FunctionsInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.functionsInput"></a>

```csharp
public CloudGcpDmIntegrationsFunctions FunctionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InterconnectInput`<sup>Optional</sup> <a name="InterconnectInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.interconnectInput"></a>

```csharp
public CloudGcpDmIntegrationsInterconnect InterconnectInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a>

---

##### `IstioInput`<sup>Optional</sup> <a name="IstioInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.istioInput"></a>

```csharp
public CloudGcpDmIntegrationsIstio IstioInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a>

---

##### `KubernetesInput`<sup>Optional</sup> <a name="KubernetesInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.kubernetesInput"></a>

```csharp
public CloudGcpDmIntegrationsKubernetes KubernetesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a>

---

##### `LinkedAccountIdInput`<sup>Optional</sup> <a name="LinkedAccountIdInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.linkedAccountIdInput"></a>

```csharp
public double LinkedAccountIdInput { get; }
```

- *Type:* double

---

##### `LoadBalancingInput`<sup>Optional</sup> <a name="LoadBalancingInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.loadBalancingInput"></a>

```csharp
public CloudGcpDmIntegrationsLoadBalancing LoadBalancingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a>

---

##### `ManagedKafkaInput`<sup>Optional</sup> <a name="ManagedKafkaInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.managedKafkaInput"></a>

```csharp
public CloudGcpDmIntegrationsManagedKafka ManagedKafkaInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a>

---

##### `MemCacheInput`<sup>Optional</sup> <a name="MemCacheInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memCacheInput"></a>

```csharp
public CloudGcpDmIntegrationsMemCache MemCacheInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a>

---

##### `MemoryStoreInput`<sup>Optional</sup> <a name="MemoryStoreInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.memoryStoreInput"></a>

```csharp
public CloudGcpDmIntegrationsMemoryStore MemoryStoreInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a>

---

##### `PubSubInput`<sup>Optional</sup> <a name="PubSubInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.pubSubInput"></a>

```csharp
public CloudGcpDmIntegrationsPubSub PubSubInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a>

---

##### `RedisInput`<sup>Optional</sup> <a name="RedisInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.redisInput"></a>

```csharp
public CloudGcpDmIntegrationsRedis RedisInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a>

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.routerInput"></a>

```csharp
public CloudGcpDmIntegrationsRouter RouterInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a>

---

##### `RunInput`<sup>Optional</sup> <a name="RunInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.runInput"></a>

```csharp
public CloudGcpDmIntegrationsRun RunInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a>

---

##### `SpannerInput`<sup>Optional</sup> <a name="SpannerInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.spannerInput"></a>

```csharp
public CloudGcpDmIntegrationsSpanner SpannerInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a>

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.sqlInput"></a>

```csharp
public CloudGcpDmIntegrationsSql SqlInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a>

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.storageInput"></a>

```csharp
public CloudGcpDmIntegrationsStorage StorageInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a>

---

##### `VirtualMachinesInput`<sup>Optional</sup> <a name="VirtualMachinesInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.virtualMachinesInput"></a>

```csharp
public CloudGcpDmIntegrationsVirtualMachines VirtualMachinesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a>

---

##### `VpcAccessInput`<sup>Optional</sup> <a name="VpcAccessInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.vpcAccessInput"></a>

```csharp
public CloudGcpDmIntegrationsVpcAccess VpcAccessInput { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.accountId"></a>

```csharp
public double AccountId { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LinkedAccountId`<sup>Required</sup> <a name="LinkedAccountId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.linkedAccountId"></a>

```csharp
public double LinkedAccountId { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudGcpDmIntegrationsAiPlatform <a name="CloudGcpDmIntegrationsAiPlatform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsAiPlatform {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsAlloyDb <a name="CloudGcpDmIntegrationsAlloyDb" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsAlloyDb {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsApiGateway <a name="CloudGcpDmIntegrationsApiGateway" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsApiGateway {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsAppEngine <a name="CloudGcpDmIntegrationsAppEngine" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsAppEngine {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsBigQuery <a name="CloudGcpDmIntegrationsBigQuery" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsBigQuery {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsBigTable <a name="CloudGcpDmIntegrationsBigTable" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsBigTable {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsComposer <a name="CloudGcpDmIntegrationsComposer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsComposer {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsConfig <a name="CloudGcpDmIntegrationsConfig" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double LinkedAccountId,
    double AccountId = null,
    CloudGcpDmIntegrationsAiPlatform AiPlatform = null,
    CloudGcpDmIntegrationsAlloyDb AlloyDb = null,
    CloudGcpDmIntegrationsApiGateway ApiGateway = null,
    CloudGcpDmIntegrationsAppEngine AppEngine = null,
    CloudGcpDmIntegrationsBigQuery BigQuery = null,
    CloudGcpDmIntegrationsBigTable BigTable = null,
    CloudGcpDmIntegrationsComposer Composer = null,
    CloudGcpDmIntegrationsDataFlow DataFlow = null,
    CloudGcpDmIntegrationsDataProc DataProc = null,
    CloudGcpDmIntegrationsDataStore DataStore = null,
    CloudGcpDmIntegrationsFirebaseAppHosting FirebaseAppHosting = null,
    CloudGcpDmIntegrationsFirebaseAuth FirebaseAuth = null,
    CloudGcpDmIntegrationsFirebaseDatabase FirebaseDatabase = null,
    CloudGcpDmIntegrationsFirebaseHosting FirebaseHosting = null,
    CloudGcpDmIntegrationsFirebaseStorage FirebaseStorage = null,
    CloudGcpDmIntegrationsFirebaseVertexAi FirebaseVertexAi = null,
    CloudGcpDmIntegrationsFirestore Firestore = null,
    CloudGcpDmIntegrationsFunctions Functions = null,
    string Id = null,
    CloudGcpDmIntegrationsInterconnect Interconnect = null,
    CloudGcpDmIntegrationsIstio Istio = null,
    CloudGcpDmIntegrationsKubernetes Kubernetes = null,
    CloudGcpDmIntegrationsLoadBalancing LoadBalancing = null,
    CloudGcpDmIntegrationsManagedKafka ManagedKafka = null,
    CloudGcpDmIntegrationsMemCache MemCache = null,
    CloudGcpDmIntegrationsMemoryStore MemoryStore = null,
    CloudGcpDmIntegrationsPubSub PubSub = null,
    CloudGcpDmIntegrationsRedis Redis = null,
    CloudGcpDmIntegrationsRouter Router = null,
    CloudGcpDmIntegrationsRun Run = null,
    CloudGcpDmIntegrationsSpanner Spanner = null,
    CloudGcpDmIntegrationsSql Sql = null,
    CloudGcpDmIntegrationsStorage Storage = null,
    CloudGcpDmIntegrationsVirtualMachines VirtualMachines = null,
    CloudGcpDmIntegrationsVpcAccess VpcAccess = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.linkedAccountId">LinkedAccountId</a></code> | <code>double</code> | The ID of the GCP Dimensional Metrics linked account (from newrelic_cloud_gcp_link_account with use_workload_identity_federation = true). |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.accountId">AccountId</a></code> | <code>double</code> | The New Relic account ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.aiPlatform">AiPlatform</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a></code> | ai_platform block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.alloyDb">AlloyDb</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a></code> | alloy_db block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.apiGateway">ApiGateway</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a></code> | api_gateway block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.appEngine">AppEngine</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a></code> | app_engine block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.bigQuery">BigQuery</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a></code> | big_query block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.bigTable">BigTable</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a></code> | big_table block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.composer">Composer</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a></code> | composer block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataFlow">DataFlow</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a></code> | data_flow block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataProc">DataProc</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a></code> | data_proc block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataStore">DataStore</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a></code> | data_store block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseAppHosting">FirebaseAppHosting</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a></code> | firebase_app_hosting block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseAuth">FirebaseAuth</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a></code> | firebase_auth block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseDatabase">FirebaseDatabase</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a></code> | firebase_database block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseHosting">FirebaseHosting</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a></code> | firebase_hosting block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseStorage">FirebaseStorage</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a></code> | firebase_storage block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseVertexAi">FirebaseVertexAi</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a></code> | firebase_vertex_ai block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firestore">Firestore</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a></code> | firestore block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.functions">Functions</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a></code> | functions block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#id CloudGcpDmIntegrations#id}. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.interconnect">Interconnect</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a></code> | interconnect block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.istio">Istio</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a></code> | istio block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.loadBalancing">LoadBalancing</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a></code> | load_balancing block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.managedKafka">ManagedKafka</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a></code> | managed_kafka block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.memCache">MemCache</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a></code> | mem_cache block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.memoryStore">MemoryStore</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a></code> | memory_store block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.pubSub">PubSub</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a></code> | pub_sub block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.redis">Redis</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a></code> | redis block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.router">Router</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a></code> | router block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.run">Run</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a></code> | run block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.spanner">Spanner</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a></code> | spanner block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.sql">Sql</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a></code> | sql block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.virtualMachines">VirtualMachines</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a></code> | virtual_machines block. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.vpcAccess">VpcAccess</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a></code> | vpc_access block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LinkedAccountId`<sup>Required</sup> <a name="LinkedAccountId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.linkedAccountId"></a>

```csharp
public double LinkedAccountId { get; set; }
```

- *Type:* double

The ID of the GCP Dimensional Metrics linked account (from newrelic_cloud_gcp_link_account with use_workload_identity_federation = true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#linked_account_id CloudGcpDmIntegrations#linked_account_id}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.accountId"></a>

```csharp
public double AccountId { get; set; }
```

- *Type:* double

The New Relic account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#account_id CloudGcpDmIntegrations#account_id}

---

##### `AiPlatform`<sup>Optional</sup> <a name="AiPlatform" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.aiPlatform"></a>

```csharp
public CloudGcpDmIntegrationsAiPlatform AiPlatform { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a>

ai_platform block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#ai_platform CloudGcpDmIntegrations#ai_platform}

---

##### `AlloyDb`<sup>Optional</sup> <a name="AlloyDb" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.alloyDb"></a>

```csharp
public CloudGcpDmIntegrationsAlloyDb AlloyDb { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a>

alloy_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#alloy_db CloudGcpDmIntegrations#alloy_db}

---

##### `ApiGateway`<sup>Optional</sup> <a name="ApiGateway" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.apiGateway"></a>

```csharp
public CloudGcpDmIntegrationsApiGateway ApiGateway { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a>

api_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#api_gateway CloudGcpDmIntegrations#api_gateway}

---

##### `AppEngine`<sup>Optional</sup> <a name="AppEngine" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.appEngine"></a>

```csharp
public CloudGcpDmIntegrationsAppEngine AppEngine { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a>

app_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#app_engine CloudGcpDmIntegrations#app_engine}

---

##### `BigQuery`<sup>Optional</sup> <a name="BigQuery" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.bigQuery"></a>

```csharp
public CloudGcpDmIntegrationsBigQuery BigQuery { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a>

big_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#big_query CloudGcpDmIntegrations#big_query}

---

##### `BigTable`<sup>Optional</sup> <a name="BigTable" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.bigTable"></a>

```csharp
public CloudGcpDmIntegrationsBigTable BigTable { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a>

big_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#big_table CloudGcpDmIntegrations#big_table}

---

##### `Composer`<sup>Optional</sup> <a name="Composer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.composer"></a>

```csharp
public CloudGcpDmIntegrationsComposer Composer { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a>

composer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#composer CloudGcpDmIntegrations#composer}

---

##### `DataFlow`<sup>Optional</sup> <a name="DataFlow" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataFlow"></a>

```csharp
public CloudGcpDmIntegrationsDataFlow DataFlow { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a>

data_flow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#data_flow CloudGcpDmIntegrations#data_flow}

---

##### `DataProc`<sup>Optional</sup> <a name="DataProc" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataProc"></a>

```csharp
public CloudGcpDmIntegrationsDataProc DataProc { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a>

data_proc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#data_proc CloudGcpDmIntegrations#data_proc}

---

##### `DataStore`<sup>Optional</sup> <a name="DataStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.dataStore"></a>

```csharp
public CloudGcpDmIntegrationsDataStore DataStore { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a>

data_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#data_store CloudGcpDmIntegrations#data_store}

---

##### `FirebaseAppHosting`<sup>Optional</sup> <a name="FirebaseAppHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseAppHosting"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseAppHosting FirebaseAppHosting { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a>

firebase_app_hosting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#firebase_app_hosting CloudGcpDmIntegrations#firebase_app_hosting}

---

##### `FirebaseAuth`<sup>Optional</sup> <a name="FirebaseAuth" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseAuth"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseAuth FirebaseAuth { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a>

firebase_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#firebase_auth CloudGcpDmIntegrations#firebase_auth}

---

##### `FirebaseDatabase`<sup>Optional</sup> <a name="FirebaseDatabase" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseDatabase"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseDatabase FirebaseDatabase { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a>

firebase_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#firebase_database CloudGcpDmIntegrations#firebase_database}

---

##### `FirebaseHosting`<sup>Optional</sup> <a name="FirebaseHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseHosting"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseHosting FirebaseHosting { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a>

firebase_hosting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#firebase_hosting CloudGcpDmIntegrations#firebase_hosting}

---

##### `FirebaseStorage`<sup>Optional</sup> <a name="FirebaseStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseStorage"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseStorage FirebaseStorage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a>

firebase_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#firebase_storage CloudGcpDmIntegrations#firebase_storage}

---

##### `FirebaseVertexAi`<sup>Optional</sup> <a name="FirebaseVertexAi" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firebaseVertexAi"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseVertexAi FirebaseVertexAi { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a>

firebase_vertex_ai block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#firebase_vertex_ai CloudGcpDmIntegrations#firebase_vertex_ai}

---

##### `Firestore`<sup>Optional</sup> <a name="Firestore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.firestore"></a>

```csharp
public CloudGcpDmIntegrationsFirestore Firestore { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a>

firestore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#firestore CloudGcpDmIntegrations#firestore}

---

##### `Functions`<sup>Optional</sup> <a name="Functions" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.functions"></a>

```csharp
public CloudGcpDmIntegrationsFunctions Functions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a>

functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#functions CloudGcpDmIntegrations#functions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#id CloudGcpDmIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Interconnect`<sup>Optional</sup> <a name="Interconnect" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.interconnect"></a>

```csharp
public CloudGcpDmIntegrationsInterconnect Interconnect { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a>

interconnect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#interconnect CloudGcpDmIntegrations#interconnect}

---

##### `Istio`<sup>Optional</sup> <a name="Istio" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.istio"></a>

```csharp
public CloudGcpDmIntegrationsIstio Istio { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a>

istio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#istio CloudGcpDmIntegrations#istio}

---

##### `Kubernetes`<sup>Optional</sup> <a name="Kubernetes" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.kubernetes"></a>

```csharp
public CloudGcpDmIntegrationsKubernetes Kubernetes { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#kubernetes CloudGcpDmIntegrations#kubernetes}

---

##### `LoadBalancing`<sup>Optional</sup> <a name="LoadBalancing" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.loadBalancing"></a>

```csharp
public CloudGcpDmIntegrationsLoadBalancing LoadBalancing { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a>

load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#load_balancing CloudGcpDmIntegrations#load_balancing}

---

##### `ManagedKafka`<sup>Optional</sup> <a name="ManagedKafka" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.managedKafka"></a>

```csharp
public CloudGcpDmIntegrationsManagedKafka ManagedKafka { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a>

managed_kafka block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#managed_kafka CloudGcpDmIntegrations#managed_kafka}

---

##### `MemCache`<sup>Optional</sup> <a name="MemCache" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.memCache"></a>

```csharp
public CloudGcpDmIntegrationsMemCache MemCache { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a>

mem_cache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#mem_cache CloudGcpDmIntegrations#mem_cache}

---

##### `MemoryStore`<sup>Optional</sup> <a name="MemoryStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.memoryStore"></a>

```csharp
public CloudGcpDmIntegrationsMemoryStore MemoryStore { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a>

memory_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#memory_store CloudGcpDmIntegrations#memory_store}

---

##### `PubSub`<sup>Optional</sup> <a name="PubSub" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.pubSub"></a>

```csharp
public CloudGcpDmIntegrationsPubSub PubSub { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a>

pub_sub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#pub_sub CloudGcpDmIntegrations#pub_sub}

---

##### `Redis`<sup>Optional</sup> <a name="Redis" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.redis"></a>

```csharp
public CloudGcpDmIntegrationsRedis Redis { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a>

redis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#redis CloudGcpDmIntegrations#redis}

---

##### `Router`<sup>Optional</sup> <a name="Router" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.router"></a>

```csharp
public CloudGcpDmIntegrationsRouter Router { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a>

router block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#router CloudGcpDmIntegrations#router}

---

##### `Run`<sup>Optional</sup> <a name="Run" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.run"></a>

```csharp
public CloudGcpDmIntegrationsRun Run { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#run CloudGcpDmIntegrations#run}

---

##### `Spanner`<sup>Optional</sup> <a name="Spanner" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.spanner"></a>

```csharp
public CloudGcpDmIntegrationsSpanner Spanner { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a>

spanner block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#spanner CloudGcpDmIntegrations#spanner}

---

##### `Sql`<sup>Optional</sup> <a name="Sql" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.sql"></a>

```csharp
public CloudGcpDmIntegrationsSql Sql { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a>

sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#sql CloudGcpDmIntegrations#sql}

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.storage"></a>

```csharp
public CloudGcpDmIntegrationsStorage Storage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#storage CloudGcpDmIntegrations#storage}

---

##### `VirtualMachines`<sup>Optional</sup> <a name="VirtualMachines" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.virtualMachines"></a>

```csharp
public CloudGcpDmIntegrationsVirtualMachines VirtualMachines { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a>

virtual_machines block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#virtual_machines CloudGcpDmIntegrations#virtual_machines}

---

##### `VpcAccess`<sup>Optional</sup> <a name="VpcAccess" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsConfig.property.vpcAccess"></a>

```csharp
public CloudGcpDmIntegrationsVpcAccess VpcAccess { get; set; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#vpc_access CloudGcpDmIntegrations#vpc_access}

---

### CloudGcpDmIntegrationsDataFlow <a name="CloudGcpDmIntegrationsDataFlow" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsDataFlow {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsDataProc <a name="CloudGcpDmIntegrationsDataProc" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsDataProc {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsDataStore <a name="CloudGcpDmIntegrationsDataStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsDataStore {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseAppHosting <a name="CloudGcpDmIntegrationsFirebaseAppHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsFirebaseAppHosting {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseAuth <a name="CloudGcpDmIntegrationsFirebaseAuth" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsFirebaseAuth {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseDatabase <a name="CloudGcpDmIntegrationsFirebaseDatabase" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsFirebaseDatabase {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseHosting <a name="CloudGcpDmIntegrationsFirebaseHosting" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsFirebaseHosting {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseStorage <a name="CloudGcpDmIntegrationsFirebaseStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsFirebaseStorage {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirebaseVertexAi <a name="CloudGcpDmIntegrationsFirebaseVertexAi" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsFirebaseVertexAi {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFirestore <a name="CloudGcpDmIntegrationsFirestore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsFirestore {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsFunctions <a name="CloudGcpDmIntegrationsFunctions" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsFunctions {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsInterconnect <a name="CloudGcpDmIntegrationsInterconnect" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsInterconnect {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsIstio <a name="CloudGcpDmIntegrationsIstio" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsIstio {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsKubernetes <a name="CloudGcpDmIntegrationsKubernetes" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsKubernetes {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsLoadBalancing <a name="CloudGcpDmIntegrationsLoadBalancing" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsLoadBalancing {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsManagedKafka <a name="CloudGcpDmIntegrationsManagedKafka" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsManagedKafka {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsMemCache <a name="CloudGcpDmIntegrationsMemCache" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsMemCache {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsMemoryStore <a name="CloudGcpDmIntegrationsMemoryStore" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsMemoryStore {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsPubSub <a name="CloudGcpDmIntegrationsPubSub" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsPubSub {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsRedis <a name="CloudGcpDmIntegrationsRedis" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsRedis {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsRouter <a name="CloudGcpDmIntegrationsRouter" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsRouter {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsRun <a name="CloudGcpDmIntegrationsRun" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsRun {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsSpanner <a name="CloudGcpDmIntegrationsSpanner" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsSpanner {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsSql <a name="CloudGcpDmIntegrationsSql" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsSql {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsStorage <a name="CloudGcpDmIntegrationsStorage" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsStorage {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsVirtualMachines <a name="CloudGcpDmIntegrationsVirtualMachines" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsVirtualMachines {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

### CloudGcpDmIntegrationsVpcAccess <a name="CloudGcpDmIntegrationsVpcAccess" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsVpcAccess {
    double MetricsPollingInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | The data polling interval in seconds. |

---

##### `MetricsPollingInterval`<sup>Optional</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; set; }
```

- *Type:* double

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.1/docs/resources/cloud_gcp_dm_integrations#metrics_polling_interval CloudGcpDmIntegrations#metrics_polling_interval}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudGcpDmIntegrationsAiPlatformOutputReference <a name="CloudGcpDmIntegrationsAiPlatformOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsAiPlatformOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatformOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsAiPlatform InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAiPlatform">CloudGcpDmIntegrationsAiPlatform</a>

---


### CloudGcpDmIntegrationsAlloyDbOutputReference <a name="CloudGcpDmIntegrationsAlloyDbOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsAlloyDbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDbOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsAlloyDb InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAlloyDb">CloudGcpDmIntegrationsAlloyDb</a>

---


### CloudGcpDmIntegrationsApiGatewayOutputReference <a name="CloudGcpDmIntegrationsApiGatewayOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsApiGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGatewayOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsApiGateway InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsApiGateway">CloudGcpDmIntegrationsApiGateway</a>

---


### CloudGcpDmIntegrationsAppEngineOutputReference <a name="CloudGcpDmIntegrationsAppEngineOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsAppEngineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngineOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsAppEngine InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsAppEngine">CloudGcpDmIntegrationsAppEngine</a>

---


### CloudGcpDmIntegrationsBigQueryOutputReference <a name="CloudGcpDmIntegrationsBigQueryOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsBigQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQueryOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsBigQuery InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigQuery">CloudGcpDmIntegrationsBigQuery</a>

---


### CloudGcpDmIntegrationsBigTableOutputReference <a name="CloudGcpDmIntegrationsBigTableOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsBigTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTableOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsBigTable InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsBigTable">CloudGcpDmIntegrationsBigTable</a>

---


### CloudGcpDmIntegrationsComposerOutputReference <a name="CloudGcpDmIntegrationsComposerOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsComposerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposerOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsComposer InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsComposer">CloudGcpDmIntegrationsComposer</a>

---


### CloudGcpDmIntegrationsDataFlowOutputReference <a name="CloudGcpDmIntegrationsDataFlowOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsDataFlowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlowOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsDataFlow InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataFlow">CloudGcpDmIntegrationsDataFlow</a>

---


### CloudGcpDmIntegrationsDataProcOutputReference <a name="CloudGcpDmIntegrationsDataProcOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsDataProcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProcOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsDataProc InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataProc">CloudGcpDmIntegrationsDataProc</a>

---


### CloudGcpDmIntegrationsDataStoreOutputReference <a name="CloudGcpDmIntegrationsDataStoreOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsDataStoreOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStoreOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsDataStore InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsDataStore">CloudGcpDmIntegrationsDataStore</a>

---


### CloudGcpDmIntegrationsFirebaseAppHostingOutputReference <a name="CloudGcpDmIntegrationsFirebaseAppHostingOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsFirebaseAppHostingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHostingOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseAppHosting InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAppHosting">CloudGcpDmIntegrationsFirebaseAppHosting</a>

---


### CloudGcpDmIntegrationsFirebaseAuthOutputReference <a name="CloudGcpDmIntegrationsFirebaseAuthOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsFirebaseAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuthOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseAuth">CloudGcpDmIntegrationsFirebaseAuth</a>

---


### CloudGcpDmIntegrationsFirebaseDatabaseOutputReference <a name="CloudGcpDmIntegrationsFirebaseDatabaseOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsFirebaseDatabaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabaseOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseDatabase InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseDatabase">CloudGcpDmIntegrationsFirebaseDatabase</a>

---


### CloudGcpDmIntegrationsFirebaseHostingOutputReference <a name="CloudGcpDmIntegrationsFirebaseHostingOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsFirebaseHostingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHostingOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseHosting InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseHosting">CloudGcpDmIntegrationsFirebaseHosting</a>

---


### CloudGcpDmIntegrationsFirebaseStorageOutputReference <a name="CloudGcpDmIntegrationsFirebaseStorageOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsFirebaseStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorageOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseStorage">CloudGcpDmIntegrationsFirebaseStorage</a>

---


### CloudGcpDmIntegrationsFirebaseVertexAiOutputReference <a name="CloudGcpDmIntegrationsFirebaseVertexAiOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsFirebaseVertexAiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAiOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsFirebaseVertexAi InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirebaseVertexAi">CloudGcpDmIntegrationsFirebaseVertexAi</a>

---


### CloudGcpDmIntegrationsFirestoreOutputReference <a name="CloudGcpDmIntegrationsFirestoreOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsFirestoreOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestoreOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsFirestore InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFirestore">CloudGcpDmIntegrationsFirestore</a>

---


### CloudGcpDmIntegrationsFunctionsOutputReference <a name="CloudGcpDmIntegrationsFunctionsOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsFunctionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctionsOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsFunctions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsFunctions">CloudGcpDmIntegrationsFunctions</a>

---


### CloudGcpDmIntegrationsInterconnectOutputReference <a name="CloudGcpDmIntegrationsInterconnectOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsInterconnectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnectOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsInterconnect InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsInterconnect">CloudGcpDmIntegrationsInterconnect</a>

---


### CloudGcpDmIntegrationsIstioOutputReference <a name="CloudGcpDmIntegrationsIstioOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsIstioOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstioOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsIstio InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsIstio">CloudGcpDmIntegrationsIstio</a>

---


### CloudGcpDmIntegrationsKubernetesOutputReference <a name="CloudGcpDmIntegrationsKubernetesOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsKubernetesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetesOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsKubernetes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsKubernetes">CloudGcpDmIntegrationsKubernetes</a>

---


### CloudGcpDmIntegrationsLoadBalancingOutputReference <a name="CloudGcpDmIntegrationsLoadBalancingOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsLoadBalancingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancingOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsLoadBalancing InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsLoadBalancing">CloudGcpDmIntegrationsLoadBalancing</a>

---


### CloudGcpDmIntegrationsManagedKafkaOutputReference <a name="CloudGcpDmIntegrationsManagedKafkaOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsManagedKafkaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafkaOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsManagedKafka InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsManagedKafka">CloudGcpDmIntegrationsManagedKafka</a>

---


### CloudGcpDmIntegrationsMemCacheOutputReference <a name="CloudGcpDmIntegrationsMemCacheOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsMemCacheOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCacheOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsMemCache InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemCache">CloudGcpDmIntegrationsMemCache</a>

---


### CloudGcpDmIntegrationsMemoryStoreOutputReference <a name="CloudGcpDmIntegrationsMemoryStoreOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsMemoryStoreOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStoreOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsMemoryStore InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsMemoryStore">CloudGcpDmIntegrationsMemoryStore</a>

---


### CloudGcpDmIntegrationsPubSubOutputReference <a name="CloudGcpDmIntegrationsPubSubOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsPubSubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSubOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsPubSub InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsPubSub">CloudGcpDmIntegrationsPubSub</a>

---


### CloudGcpDmIntegrationsRedisOutputReference <a name="CloudGcpDmIntegrationsRedisOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsRedisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedisOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsRedis InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRedis">CloudGcpDmIntegrationsRedis</a>

---


### CloudGcpDmIntegrationsRouterOutputReference <a name="CloudGcpDmIntegrationsRouterOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsRouterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouterOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsRouter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRouter">CloudGcpDmIntegrationsRouter</a>

---


### CloudGcpDmIntegrationsRunOutputReference <a name="CloudGcpDmIntegrationsRunOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsRunOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRunOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsRun InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsRun">CloudGcpDmIntegrationsRun</a>

---


### CloudGcpDmIntegrationsSpannerOutputReference <a name="CloudGcpDmIntegrationsSpannerOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsSpannerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpannerOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsSpanner InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSpanner">CloudGcpDmIntegrationsSpanner</a>

---


### CloudGcpDmIntegrationsSqlOutputReference <a name="CloudGcpDmIntegrationsSqlOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsSqlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSqlOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsSql InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsSql">CloudGcpDmIntegrationsSql</a>

---


### CloudGcpDmIntegrationsStorageOutputReference <a name="CloudGcpDmIntegrationsStorageOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorageOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsStorage">CloudGcpDmIntegrationsStorage</a>

---


### CloudGcpDmIntegrationsVirtualMachinesOutputReference <a name="CloudGcpDmIntegrationsVirtualMachinesOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsVirtualMachinesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachinesOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsVirtualMachines InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVirtualMachines">CloudGcpDmIntegrationsVirtualMachines</a>

---


### CloudGcpDmIntegrationsVpcAccessOutputReference <a name="CloudGcpDmIntegrationsVpcAccessOutputReference" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Newrelic;

new CloudGcpDmIntegrationsVpcAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.resetMetricsPollingInterval">ResetMetricsPollingInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsPollingInterval` <a name="ResetMetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.resetMetricsPollingInterval"></a>

```csharp
private void ResetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.metricsPollingIntervalInput">MetricsPollingIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.metricsPollingInterval">MetricsPollingInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricsPollingIntervalInput`<sup>Optional</sup> <a name="MetricsPollingIntervalInput" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.metricsPollingIntervalInput"></a>

```csharp
public double MetricsPollingIntervalInput { get; }
```

- *Type:* double

---

##### `MetricsPollingInterval`<sup>Required</sup> <a name="MetricsPollingInterval" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.metricsPollingInterval"></a>

```csharp
public double MetricsPollingInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccessOutputReference.property.internalValue"></a>

```csharp
public CloudGcpDmIntegrationsVpcAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-newrelic.cloudGcpDmIntegrations.CloudGcpDmIntegrationsVpcAccess">CloudGcpDmIntegrationsVpcAccess</a>

---



