"""add is pinned flag

Revision ID: 20b03fd331e8
Revises: ac3933258035
Create Date: 2024-09-16 20:16:55.080572

"""
from typing import Sequence, Union

import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision: str = '20b03fd331e8'
down_revision: Union[str, None] = 'ac3933258035'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('conversations', sa.Column('is_pinned', sa.Boolean(), nullable=False, server_default=sa.false()))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('conversations', 'is_pinned')
    # ### end Alembic commands ###
