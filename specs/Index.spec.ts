import {
  Index as SrcIndex,
  User as SrcUser,
  Group as SrcGroup,
  Profile as SrcProfile,
  Member as SrcMember
} from '../src';
import {
  Index as BuildIndex,
  User as BuildUser,
  Group as BuildGroup,
  Profile as BuildProfile,
  Member as BuildMember
} from '../build';

import Index from './Index';

Index(SrcIndex, SrcUser, SrcGroup, SrcProfile, SrcMember);
Index(BuildIndex, BuildUser, BuildGroup, BuildProfile, BuildMember);
