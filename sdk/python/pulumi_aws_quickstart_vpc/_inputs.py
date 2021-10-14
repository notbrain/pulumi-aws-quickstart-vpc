# coding=utf-8
# *** WARNING: this file was generated by Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from . import _utilities

__all__ = [
    'AvailabilityZoneArgs',
]

@pulumi.input_type
class AvailabilityZoneArgs:
    def __init__(__self__, *,
                 availability_zone: str,
                 private_subnet_a_cidr: Optional[str] = None,
                 private_subnet_b_cidr: Optional[str] = None,
                 public_subnet_cidr: Optional[str] = None):
        """
        The list of Configurations in which to create subnets. You can specify availability
        zone with a private or a public subnet cidr block. You can also associated a private
        subnet with a dedicated network ACL.

        :param str availability_zone: The availability zone name to deploy the subnet into
        :param str private_subnet_a_cidr: CIDR block for a private subnet located in the specified availability zone
        :param str private_subnet_b_cidr: CIDR block for the associated private subnet (2) with a dedicated network ACL located in the specified availability zone. This subnet
               will only be created if `CreateAdditionalPrivateSubnets` is `true`.
        :param str public_subnet_cidr: CIDR block for the public subnet located in the specified availability zone
        """
        pulumi.set(__self__, "availability_zone", availability_zone)
        if private_subnet_a_cidr is not None:
            pulumi.set(__self__, "private_subnet_a_cidr", private_subnet_a_cidr)
        if private_subnet_b_cidr is not None:
            pulumi.set(__self__, "private_subnet_b_cidr", private_subnet_b_cidr)
        if public_subnet_cidr is not None:
            pulumi.set(__self__, "public_subnet_cidr", public_subnet_cidr)

    @property
    @pulumi.getter(name="availabilityZone")
    def availability_zone(self) -> str:
        """
        The availability zone name to deploy the subnet into
        """
        return pulumi.get(self, "availability_zone")

    @availability_zone.setter
    def availability_zone(self, value: str):
        pulumi.set(self, "availability_zone", value)

    @property
    @pulumi.getter(name="privateSubnetACidr")
    def private_subnet_a_cidr(self) -> Optional[str]:
        """
        CIDR block for a private subnet located in the specified availability zone
        """
        return pulumi.get(self, "private_subnet_a_cidr")

    @private_subnet_a_cidr.setter
    def private_subnet_a_cidr(self, value: Optional[str]):
        pulumi.set(self, "private_subnet_a_cidr", value)

    @property
    @pulumi.getter(name="privateSubnetBCidr")
    def private_subnet_b_cidr(self) -> Optional[str]:
        """
        CIDR block for the associated private subnet (2) with a dedicated network ACL located in the specified availability zone. This subnet
        will only be created if `CreateAdditionalPrivateSubnets` is `true`.
        """
        return pulumi.get(self, "private_subnet_b_cidr")

    @private_subnet_b_cidr.setter
    def private_subnet_b_cidr(self, value: Optional[str]):
        pulumi.set(self, "private_subnet_b_cidr", value)

    @property
    @pulumi.getter(name="publicSubnetCidr")
    def public_subnet_cidr(self) -> Optional[str]:
        """
        CIDR block for the public subnet located in the specified availability zone
        """
        return pulumi.get(self, "public_subnet_cidr")

    @public_subnet_cidr.setter
    def public_subnet_cidr(self, value: Optional[str]):
        pulumi.set(self, "public_subnet_cidr", value)


